# 🧠 Asistente IA PMS

Este es un microservicio de Inteligencia Artificial diseñado para integrarse en un software PMS (Personal Management System) y automatizar la detección de intenciones en mensajes de clientes de hotel.

## 📦 Estructura del Proyecto

```
asistente-ia-pms/
├── public/
│   ├── index.html       # Interfaz de prueba para analizar mensajes
│   └── stats.html       # Visualizador de estadísticas
├── server/
│   ├── entrenamiento.json # Frases de entrenamiento por intención
│   ├── historial.json      # Historial de conversaciones
│   ├── ia.js               # Lógica de IA y entrenamiento
│   └── index.js            # Servidor Express
└── README.md
```

## 🚀 Cómo funciona

1. El cliente escribe un mensaje (por ejemplo: “quiero reservar una habitación”).
2. El servidor lo analiza con `natural` (IA básica de Node.js).
3. Devuelve la intención detectada, el nivel de confianza y una sugerencia.
4. Si la IA no entiende bien, propone contactar con recepción.

## 📊 Estadísticas

Visita `/stats.html` para ver las intenciones más detectadas y el total de mensajes analizados.

## ⚙️ Tecnologías

- Node.js
- Express
- natural (NLP)
- JSON para entrenamiento dinámico

## 🧠 Entrenamiento Extensible

Puedes añadir frases nuevas en `server/entrenamiento.json` para mejorar la detección.  
Ejemplo:

```json
"reserva": [
  "quiero reservar una habitación",
  "me gustaría hacer una reserva"
]
```

## 🔐 Futuras funcionalidades

- Entrenamiento desde panel gráfico
- Detectar tono emocional
- Exportar historial
- Integración con PMS real
- Control multiusuario
- Dashboard visual

## 👨‍💻 Autor

Luis Jahir Rodríguez Cedeño — [@luisrocedev](https://github.com/luisrocedev)
