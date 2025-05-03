---
marp: true
theme: gaia
paginate: true
---

# 🧠 Resultados de aprendizaje - Asistente IA Hotel 4 Estrellas

---

# Programación

## 1. Elementos fundamentales
- **Node.js** y **Express** para servidor.
- **JavaScript** en frontend: manejo de **variables**, **constantes**, **tipos primitivos** y **objetos**.
- Uso de librería `natural` para NLP (Jaro-Winkler).

```small-code
const express = require('express');
const natural = require('natural');
let faq = [];
```

---

## 2. Estructuras de control y asincronía
- **Condicionales**: `if`, `else`.
- **Repeticiones**: `forEach`, `map`, **arrow functions**.
- **async/await** y **try-catch** para flujo asíncrono y manejo de errores.

```small-code
async function analizar() {
  try {
    const res = await fetch('/analizar');
  } catch (err) {
    console.error(err);
  }
}
```

---

## 3. Modularización y rutas
- Separación en archivos: `server/index.js`, `server/ia.js`, `public/js/index.js`.
- Definición de **endpoints** REST: `POST /analizar`, `GET /stats`.
- Exportación y uso de funciones con `module.exports`.

---

# Sistemas Informáticos

## 1. Plataformas y despliegue
- Desarrollo en **macOS**, compatible con **Linux** y **Windows**.
- Despliegue local o en servidor con Node.js.
- Configuración con **dotenv** y variables de entorno.

---

# Entornos de Desarrollo

## 1. IDE y herramientas
- **VS Code** con extensiones de JavaScript, ESLint, Prettier.
- Scripts npm: `npm run dev`, `npm start`.
- Logging con **morgan** (requests) y **winston** (errores).

---

# Bases de Datos y Persistencia

## 1. Almacenamiento ligero
- Uso de **JSON**: `faq.json`, `entrenamiento.json`, `historial.json`.
- Lectura/escritura con `fs.promises`.
- Alternativa futura: integrar **SQLite** o **MongoDB**.

---

# Lenguajes de Marcas y Gestión de Información

## 1. HTML, CSS y JS puro
- Interfaz de chat con **burbujas** y **sugerencias clickables**.
- Política CSP con **Helmet**: solo scripts `self`.
- Gestión de DOM con `document.createElement` y eventos.

---

# Proyecto Intermodular

## 1. Objetivo y módulos
- Asistente conversacional para hotel de 4 estrellas.
- Módulos: **IA** (lógica de respuesta), **API** (Express), **UI** (chat en frontend).
- Posibles mejoras: contexto conversacional, multiusuario, tests y CI.
