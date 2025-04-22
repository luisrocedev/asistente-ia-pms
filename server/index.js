const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 3000;

const { detectarIntencion } = require("./ia");

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.post("/analizar", (req, res) => {
  const mensaje = req.body.mensaje;
  if (!mensaje) return res.status(400).json({ error: "Mensaje vacío" });
  const resultado = detectarIntencion(mensaje);
  res.json(resultado);
});

app.get("/stats", (req, res) => {
  const ruta = path.join(__dirname, "historial.json");
  if (!fs.existsSync(ruta))
    return res.json({ mensaje: "Sin historial aún", stats: {} });

  const hist = JSON.parse(fs.readFileSync(ruta));
  const stats = {};
  hist.forEach((entry) => {
    stats[entry.intencion_detectada] =
      (stats[entry.intencion_detectada] || 0) + 1;
  });

  res.json({ total: hist.length, stats });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
