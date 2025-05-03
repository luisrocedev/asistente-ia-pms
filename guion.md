---
# 🎤 Guion hablado para el Proyecto Asistente IA Hotel 4 Estrellas

## Introducción

Hola, soy [tu nombre] y en este vídeo voy a presentar mi proyecto Asistente IA Hotel 4 Estrellas, una aplicación diseñada para responder dudas frecuentes de los huéspedes de un hotel, utilizando tecnologías web sencillas y accesibles. A continuación, explicaré cómo está construido el software, qué decisiones técnicas tomé y cómo puedes adaptarlo a tus necesidades.
---

## 1. Programación

El asistente está desarrollado principalmente con Node.js y Express en el backend, y HTML, CSS y JavaScript en el frontend. Utilizo archivos JSON para almacenar las preguntas frecuentes, los ejemplos de entrenamiento y, opcionalmente, el historial de conversaciones.

La lógica de la IA se basa en la librería `natural` y el algoritmo Jaro-Winkler para comparar la similitud entre lo que pregunta el usuario y las respuestas almacenadas. El umbral de similitud se puede ajustar fácilmente en el archivo de configuración.

El código está organizado en módulos: el servidor, la lógica de IA y los archivos de datos. Uso funciones para separar tareas y mantener el código claro y fácil de mantener.

---

## 2. Sistemas Informáticos

Desarrollo el proyecto en un Mac, pero el software es compatible con cualquier sistema que soporte Node.js, como Windows o Linux. El asistente puede funcionar en local o desplegarse en un servidor.

La seguridad se refuerza usando Helmet para proteger las cabeceras HTTP y dotenv para gestionar las variables de entorno. Además, valido las entradas del usuario para evitar inyecciones o datos no deseados.

El control de versiones y las copias de seguridad se gestionan con Git y GitHub.

---

## 3. Entornos de Desarrollo

Utilizo Visual Studio Code como editor principal, junto con extensiones para JavaScript y Node.js. El servidor se puede iniciar en modo desarrollo con nodemon o en modo producción con npm start.

La documentación técnica se encuentra en archivos markdown y comentarios en el código. Refactorizo el código periódicamente para mantenerlo limpio y eficiente.

---

## 4. Almacenamiento de Datos

Toda la información se guarda en archivos JSON: preguntas frecuentes, ejemplos de entrenamiento y, si se desea, el historial de conversaciones. Esto facilita la edición y el backup de los datos.

No uso bases de datos externas, pero el sistema está preparado para ampliarse si se necesita mayor escalabilidad en el futuro.

---

## 5. Interfaz y Experiencia de Usuario

La interfaz es sencilla y responsiva. El usuario puede escribir preguntas en un chat y recibir respuestas automáticas. También se muestran sugerencias de preguntas frecuentes para facilitar la interacción.

El diseño es adaptable a móviles y ordenadores, y el historial de la conversación se muestra en burbujas para una mejor experiencia visual.

---

## 6. Personalización y Ampliación

Puedes personalizar fácilmente las preguntas y respuestas editando los archivos JSON. Si quieres mejorar la IA, solo tienes que añadir más ejemplos de entrenamiento o ajustar el umbral de similitud.

El proyecto está pensado para ser sencillo de modificar y ampliar según las necesidades del hotel.

---

## Cierre

Y hasta aquí la presentación del Asistente IA Hotel 4 Estrellas. Espero que ahora tengas claro cómo funciona, cómo está construido y cómo puedes adaptarlo. Si tienes dudas o sugerencias, déjalas en los comentarios.

¡Gracias por ver el vídeo!
