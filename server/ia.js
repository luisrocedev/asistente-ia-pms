const natural = require("natural");
const fs = require("fs");
const path = require("path");

const classifier = new natural.BayesClassifier();
const TRAIN_PATH = path.join(__dirname, "entrenamiento.json");
const HIST_PATH = path.join(__dirname, "historial.json");
const MIN_CONF = 0.3;

let data = JSON.parse(fs.readFileSync(TRAIN_PATH));
for (const etiqueta in data) {
  data[etiqueta].forEach((frase) => classifier.addDocument(frase, etiqueta));
}
classifier.train();

const RESPUESTAS = {
  reserva: "¿Quieres reservar? Indícame fechas y número de huéspedes.",
  cancelacion: "¿Deseas cancelar? Puedo ayudarte.",
  precio: "Dime qué tipo de habitación y fechas para darte el precio.",
};

function detectarIntencion(texto = "") {
  texto = texto.trim();
  if (!texto) return _respuestaBasica(texto);

  const clasificaciones = classifier.getClassifications(texto.toLowerCase());
  const mejor = clasificaciones.reduce((a, b) => (a.value > b.value ? a : b));
  const confianza = parseFloat(mejor.value).toFixed(2);
  const label = mejor.label;

  const necesitaRecep =
    confianza < MIN_CONF || label === "inapropiado" || !RESPUESTAS[label];

  const resultado = {
    fecha: new Date().toISOString(),
    mensaje_original: texto,
    intencion_detectada: label,
    confianza,
    sugerencia: necesitaRecep
      ? "Parece que no entendí bien tu mensaje. ¿Podrías reformularlo o hablar con recepción?"
      : RESPUESTAS[label],
    necesita_recepcionista: necesitaRecep,
  };

  _guardarHistorial(resultado);
  return resultado;
}

function _respuestaBasica(texto) {
  return {
    fecha: new Date().toISOString(),
    mensaje_original: texto,
    intencion_detectada: "desconocido",
    confianza: 0,
    sugerencia: "No entendí tu mensaje. ¿Quieres hablar con recepción?",
    necesita_recepcionista: true,
  };
}

function _guardarHistorial(entry) {
  let hist = [];
  if (fs.existsSync(HIST_PATH)) {
    hist = JSON.parse(fs.readFileSync(HIST_PATH));
  }
  hist.unshift(entry);
  fs.writeFileSync(HIST_PATH, JSON.stringify(hist.slice(0, 100), null, 2));
}

module.exports = { detectarIntencion };
