require("dotenv").config();
const express = require("express");
const path = require("path");
const fs = require("fs");
const fsp = fs.promises;
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const { responderPregunta } = require("./ia");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", 'https:'],
      imgSrc: ["'self'", 'data:'],
      connectSrc: ["'self'"],
    },
  })
);
app.use(helmet());
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "../public")));

app.post("/analizar", async (req, res) => {
  try {
    const mensaje = req.body.mensaje;
    if (typeof mensaje !== "string" || !mensaje.trim())
      return res.status(400).json({ error: "Mensaje vacío o inválido" });
    const respuesta = responderPregunta(mensaje);
    res.json(respuesta);
  } catch (err) {
    console.error("Error en /analizar:", err);
    res.status(500).json({ error: "Error interno" });
  }
});

app.get("/stats", async (req, res) => {
  try {
    const ruta = path.join(__dirname, "historial.json");
    if (!fs.existsSync(ruta))
      return res.json({ mensaje: "Sin historial aún", stats: {}, total: 0 });
    const raw = await fsp.readFile(ruta, "utf-8");
    const hist = JSON.parse(raw);
    const stats = {};
    hist.forEach((entry) => {
      stats[entry.intencion_detectada] =
        (stats[entry.intencion_detectada] || 0) + 1;
    });
    res.json({ total: hist.length, stats });
  } catch (err) {
    console.error("Error en /stats:", err);
    res.status(500).json({ error: "Error leyendo historial" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
