# Asistente IA Hotel 4 Estrellas

Un asistente conversacional local, fácil de entrenar y personalizar, diseñado para mejorar la atención al cliente en un hotel de 4 estrellas.

---

## 🚀 Características principales

- Chat interactivo con burbujas para el usuario y el bot.
- Sugerencias de preguntas clickables para guiar la conversación.
- Motor de IA propio sin dependencia de servicios externos, basado en similaridad Jaro–Winkler (librería `natural`).
- Entrenamiento sencillo mediante archivos JSON:
  - `server/faq.json` para preguntas–respuestas.
  - `server/entrenamiento.json` para frases de ejemplo.
- Política de seguridad estricta con Helmet (CSP) y logging con Morgan/Winston.

---

## 🛠️ Instalación y configuración

1. Clona o descarga el repositorio y accede a la carpeta:
   ```bash
   git clone <URL-del-proyecto>
   cd asistente-ia-pms
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. (Opcional) Crea un archivo `.env` en la raíz para personalizar el puerto:
   ```ini
   PORT=3000
   ```
4. En desarrollo, ejecuta:
   ```bash
   npm run dev
   ```
   Para producción:
   ```bash
   npm start
   ```
5. Abre tu navegador en `http://localhost:3000` para comenzar a usar el asistente.

---

## 📚 Entrenamiento y personalización

- **Añadir contenido**: edita `server/faq.json` y agrega nuevos pares de preguntas y respuestas.
- **Frases de ejemplo**: en `server/entrenamiento.json` define frases típicas para intenciones específicas.
- **Ajustar umbral**: cambia el valor (0.7 por defecto) en `server/ia.js` para controlar sensibilidad.
- **Recarga**: reinicia el servidor tras cada cambio para que la IA recargue los datos.

---

## 📂 Estructura de carpetas
```
asistente-ia-pms/
├─ server/         # Lógica del servidor y motor de IA
│  ├─ faq.json
│  ├─ entrenamiento.json
│  ├─ historial.json
│  ├─ ia.js
│  └─ index.js
├─ public/         # Interfaz estática y scripts del frontend
│  ├─ index.html
│  ├─ stats.html
│  └─ js/
│     ├─ index.js
│     └─ stats.js
├─ README.md       # Documentación principal
├─ aprendizaje.md  # Diapositivas de resultados de aprendizaje
└─ guion.md        # Guion para presentación en vídeo
```

---

## 🔭 Próximos pasos y mejoras

- Contexto conversacional multi-turno.
- Persistencia en base de datos (MongoDB, SQLite).
- Tests unitarios e integración continua (CI).
- Interfaz más rica (iconos, animaciones, soporte multimedia).

---

## 📜 Licencia

Este proyecto está licenciado bajo MIT. ¡Adáptalo y mejóralo a tu gusto!
