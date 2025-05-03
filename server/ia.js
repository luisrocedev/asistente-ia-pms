const natural = require("natural");
const fs = require("fs");
const path = require("path");

// Cargamos FAQs definidas por el usuario
const FAQ_PATH = path.join(__dirname, "faq.json");
let faq = [];
try {
  faq = JSON.parse(fs.readFileSync(FAQ_PATH, 'utf-8'));
} catch (err) {
  console.error('Error leyendo faq.json:', err);
}

const TRAIN_PATH = path.join(__dirname, "entrenamiento.json");
let entrenamiento = {};
try {
  entrenamiento = JSON.parse(fs.readFileSync(TRAIN_PATH, 'utf-8'));
} catch (err) {
  console.error('Error leyendo entrenamiento.json:', err);
}

// Respuestas por defecto para las intenciones de entrenamiento
const RESPUESTAS_POR_DEFECTO = {
  reserva: "Para reservar, indícame fechas y número de huéspedes.",
  cancelacion: "Para cancelar, por favor dime tu número de reserva.",
  precio: "Dime qué tipo de habitación y fechas para darte el precio.",
};

// Añadir cada frase de entrenamiento a la lista de FAQs con su respuesta por defecto
Object.entries(entrenamiento).forEach(([etiqueta, frases]) => {
  frases.forEach(frase => {
    faq.push({ question: frase, answer: RESPUESTAS_POR_DEFECTO[etiqueta] || 'Lo siento, no tengo esa información.' });
  });
});

/**
 * Calcula la respuesta más apropiada en base a las FAQs.
 * Usa Jaro-Winkler para medir similaridad entre pregunta del usuario y FAQs.
 */
function responderPregunta(texto = "") {
  texto = texto.trim().toLowerCase();
  // Detectar saludos y responder bienvenida
  const saludos = ['hola', 'buenos días', 'buenas tardes', 'buenas noches'];
  if (saludos.includes(texto)) {
    const suggestions = faq.slice(0, 3).map(item => item.question);
    return { answer: '¡Hola! Soy tu asistente del Hotel 4 Estrellas. ¿En qué puedo ayudarte hoy?', suggestions };
  }
  if (!texto) return { answer: 'Por favor escribe tu pregunta.', suggestions: [] };
  // Calcular puntuaciones para cada FAQ
  const resultados = faq.map(item => ({
    question: item.question,
    answer: item.answer,
    score: natural.JaroWinklerDistance(texto, item.question.toLowerCase())
  }));
  // Ordenar por puntuación descendente
  resultados.sort((a, b) => b.score - a.score);
  const mejor = resultados[0];
  // Preparar sugerencias con las siguientes preguntas más parecidas
  const suggestions = resultados.slice(1, 4).map(r => r.question);
  // Determinar respuesta o fallback
  if (mejor.score > 0.7) {
    return { answer: mejor.answer, suggestions };
  } else {
    return { answer: 'Lo siento, no tengo esa información. Por favor contacta con recepción.', suggestions };
  }
}

// Opcional: podrías conservar un historial de preguntas/respuestas en historial.json si lo deseas

module.exports = { responderPregunta };
