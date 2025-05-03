# Asistente IA Hotel 4 Estrellas

Asistente conversacional de IA para la gestión y atención al cliente en un hotel de 4 estrellas.

## 📦 Características

- Chat interactivo con burbujas de usuario y bot.
- Sugerencias de preguntas clickables para guiar la conversación.
- Motor de respuesta propio basado en FAQs y distancia de Jaro-Winkler (sin servicios externos).
- Entrenamiento sencillo: añadir preguntas en `server/faq.json` y ejemplos en `server/entrenamiento.json`.
- Historial ligero en JSON (opcional).
- Seguridad básica con Helmet (CSP) y logging con morgan/winston.

## 🚀 Instalación y arranque

1. Clona el repositorio:

   ```bash
   git clone <URL-del-proyecto>
   cd asistente-ia-pms
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz (opcional) para personalizar el puerto:

   ```ini
   PORT=3000
   ```

4. En desarrollo, usa:

   ```bash
   npm run dev
   ```

   En producción:

   ```bash
   npm start
   ```

5. Abre tu navegador en `http://localhost:3000` para hablar con el asistente.

## 🔧 Entrenamiento y personalización

- **`server/faq.json`**: lista de `{ question, answer }` para tu negocio.
- **`server/entrenamiento.json`**: ejemplos de frases agrupadas por intención y respuestas por defecto.
- El servidor fusiona ambos archivos al arrancar y calcula similaridad Jaro-Winkler.
- Ajusta el umbral de respuesta (0.7 por defecto) directamente en `server/ia.js` si lo deseas.

## 📂 Estructura de carpetas

```
server/      Código backend (Express + lógica IA)
  ├─ faq.json
  ├─ entrenamiento.json
  ├─ ia.js
  └─ index.js
public/      UI y assets estáticos
  ├─ index.html
  ├─ stats.html
  └─ js/
      ├─ index.js
      └─ stats.js
README.md    Documentación principal
aprendizaje.md  Notas de aprendizaje y tecnologías usadas
guion.md     Guion para presentación en vídeo
```

## 📝 Licencia

Este proyecto está licenciado bajo MIT. Siéntete libre de adaptarlo a tus necesidades.