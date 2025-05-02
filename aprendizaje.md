---
marp: true
theme: gaia
paginate: true
---

# 🗂️ Aprendizaje sobre el Proyecto Asistente-IA-PMS

---

# Programación

## 1. Elementos fundamentales del código
- Uso de variables y constantes en JavaScript (Node.js y frontend).
- Tipos: string, number, boolean, array, objeto.
- Ejemplo:
```js
const fs = require('fs');
let historial = [];
```

---

## 2. Estructuras de control
- Condicionales: if, else, switch.
- Bucles: for, forEach.
- Ejemplo:
```js
for (let mensaje of historial) {
  // ...
}
```

---

## 3. Control de excepciones y gestión de errores
- Uso de try-catch en Node.js para manejar errores de archivos y lógica.

---

## 4. Documentación del código
- Comentarios en JS y archivos markdown (README, aprendizaje, guion).

---

## 5. Paradigma aplicado
- Programación modular y estructurada.
- Separación de lógica en archivos: ia.js (lógica IA), index.js (servidor), public/ (frontend).

---

## 6. Clases y objetos principales
- Objetos: mensaje, usuario, historial.
- Uso de funciones y objetos para organizar la lógica.

---

## 7. Conceptos avanzados
- Procesamiento de lenguaje natural (NLP) para la IA.
- Gestión de datos en archivos JSON.
- Modularidad y reutilización de funciones.

---

## 8. Gestión de información y archivos
- Uso de archivos JSON para almacenar historial y entrenamiento.
- Posibilidad de ampliar con base de datos.

---

## 9. Estructuras de datos utilizadas
- Arrays y objetos para mensajes, usuarios e historial.

---

## 10. Técnicas avanzadas
- Integración de modelos de IA para respuestas automáticas.
- Comunicación entre frontend y backend vía HTTP.

---

# Sistemas Informáticos

## 1. Características del hardware
- Desarrollo y pruebas en MacBook (macOS), compatible con cualquier sistema con Node.js.

---

## 2. Sistema operativo
- Multiplataforma: macOS, Linux, Windows.

---

## 3. Configuración de redes
- Acceso por HTTP en red local.

---

## 4. Copias de seguridad
- Uso de Git para control de versiones y backups manuales de archivos JSON.

---

## 5. Integridad y seguridad de datos
- Validación de entradas y gestión de sesiones si es necesario.

---

## 6. Usuarios, permisos y accesos
- Gestión básica de usuarios en el historial.

---

## 7. Documentación técnica
- Archivos markdown y comentarios en el código.

---

# Entornos de Desarrollo

## 1. Entorno de desarrollo (IDE)
- Visual Studio Code con extensiones para JS y Node.js.

---

## 2. Automatización de tareas
- Scripts npm para iniciar el servidor y tareas de desarrollo.

---

## 3. Control de versiones
- Git y GitHub.

---

## 4. Refactorización
- Mejoras periódicas en la estructura y modularidad del código.

---

## 5. Documentación técnica
- README.md, aprendizaje.md, guion.md.

---

## 6. Diagramas
- Opcional: diagramas de flujo para la arquitectura del asistente.

---

# Bases de Datos

## 1. Sistema gestor
- No se usa base de datos, se emplean archivos JSON.

---

## 2. Modelo entidad-relación
- No aplica actualmente.

---

## 3. Funcionalidades avanzadas
- Posibilidad de integración futura con bases de datos.

---

## 4. Protección y recuperación de datos
- Backups manuales de archivos JSON y control de versiones en Git.

---

# Lenguajes de Marcas y Gestión de Información

## 1. Estructura de HTML
- Uso de etiquetas semánticas en public/index.html.

---

## 2. Tecnologías frontend
- HTML, CSS, JavaScript.

---

## 3. Interacción con el DOM
- JS para mostrar mensajes y respuestas de la IA.

---

## 4. Validación de HTML y CSS
- Validadores online y extensiones del IDE.

---

## 5. Conversión de datos (XML, JSON)
- Uso de JSON para mensajes, historial y entrenamiento.

---

## 6. Integración con sistemas de gestión
- Posibilidad de integración futura mediante APIs.

---

# Proyecto Intermodular

## 1. Objetivo del software
- Facilitar la gestión hotelera mediante un asistente inteligente.

---

## 2. Necesidad o problema que soluciona
- Automatiza respuestas y ayuda en tareas administrativas.

---

## 3. Stack de tecnologías
- Node.js, JavaScript, HTML, CSS, modelos de IA.

---

## 4. Desarrollo por módulos
- Módulo de interfaz, servidor, IA y utilidades.

---

<style>
section code, section pre {
  font-size: 0.8em;
}
.small-code code, .small-code pre {
  font-size: 0.7em;
}
</style>