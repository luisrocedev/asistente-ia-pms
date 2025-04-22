# Integración Asistente IA en PMS-Daniya

## ¿Qué hace?
Detecta la intención de mensajes de texto (reservas, cancelaciones, precios...) usando IA local (`natural`).

## Ruta API
POST /analizar

## Ejemplo de payload:
{
  "mensaje": "quiero cancelar mi reserva"
}

## Respuesta:
{
  "intencion_detectada": "cancelacion",
  "confianza": "0.92",
  "sugerencia": "..."
}
