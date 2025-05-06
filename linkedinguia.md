# Guía para Publicaciones de LinkedIn – Proyecto "asistente-ia-pms"

Esta guía te ayudará a preparar y realizar publicaciones de LinkedIn sobre el proyecto, adaptadas a cada asignatura. Puedes copiar y completar los ejemplos durante el examen.

---

## Lenguajes de Marcas

🚀 **Presentando “asistente-ia-pms” – Lenguajes de Marcas**

Hoy os muestro la interfaz de nuestro asistente, desarrollada con HTML5 y CSS3 para asegurar compatibilidad y accesibilidad.

Ejemplo de código:

**<**form\*\* **id**=**"formulario"**>\*\*

** <**input\*\* **type**=**"text"** **id**=**"mensaje"** **placeholder**=**"Escribe tu pregunta..."** />\*\*

** <**button\*\* **type**=**"submit"**>Enviar</**button**>\*\*

**</**form**>**

[Sube aquí una captura de la interfaz web]

---

## Sistemas Informáticos

🔒 **Seguridad y rendimiento en “asistente-ia-pms” – Sistemas Informáticos**

El backend está construido con Node.js y Express, aplicando medidas de seguridad como Helmet y registro de logs con Morgan.

Ejemplo de código:

**app**.**use**(**helmet**(**)**)**;**

**app**.**use**(**morgan**(**"combined"**)**)**;

[Incluye aquí un diagrama de arquitectura o consola mostrando logs]

---

## Base de Datos

📊 **Gestión de datos en “asistente-ia-pms” – Base de Datos**

El historial de preguntas y respuestas se almacena en archivos JSON, facilitando la gestión y consulta de la información.

Ejemplo de código:

**const** **raw** **=** **await** **fsp**.**readFile**(**ruta**, **"utf-8"**)**;**

**const** **hist** **=** **JSON**.**parse**(**raw**)**;**

[Adjunta aquí un fragmento de historial.json]

---

## Entornos de Desarrollo

⚙️ **Desarrollo ágil con npm – Entornos de Desarrollo**

Utilizamos npm para gestionar dependencias y scripts, lo que facilita la instalación y despliegue del proyecto.

Ejemplo de script en package.json:

**"scripts"**: **{**

\*\* **"start"**: \*\*"node server/index.js"

**}**

[Incluye una captura de la terminal ejecutando npm start]

---

## Programación

💻 **Lógica y algoritmia en “asistente-ia-pms” – Programación**

La lógica del asistente se desarrolla en JavaScript, aplicando estructuras de control, funciones y manejo de eventos para procesar las preguntas y generar respuestas.

Ejemplo de código:

**function** **responderPregunta**(**mensaje**)\*\* \*\*{

\*\* \*\*// Analiza el mensaje y devuelve una respuesta

\*\* **if** **(**mensaje**.**includes**(**'hola'**)**)\*\* **{**

\*\* **return** **'¡Hola! ¿En qué puedo ayudarte?'**;\*\*

\*\* \*\*}

\*\* \*\*// ...más lógica...

**}**

[Incluye aquí un diagrama de flujo o fragmento de la lógica de IA]

---

## Proyecto Intermodular

🤖 **Integración total: “asistente-ia-pms” – Proyecto Intermodular**

Este proyecto une conocimientos de todas las asignaturas, desde la interfaz hasta la lógica de IA.

Ejemplo de función:

**function** **responderPregunta**(**mensaje**)\*\* \*\*{

\*\* \*\*// Lógica de IA para analizar y responder

**}**

[Sube un gif o imagen del asistente respondiendo en tiempo real]
