# Informe Técnico del Proyecto

## Programación

### ¿Qué elementos fundamentales incluye vuestro código (variables, constantes, operadores, tipos de datos)?
El código utiliza variables (`let`), constantes (`const`), operadores aritméticos y lógicos, y tipos de datos como cadenas (`string`), números, arrays y objetos.

**Ejemplo real:**
```javascript
const mensaje = "quiero reservar una habitación"; // string
let confianza = 0.85; // número
const intenciones = ["reserva", "cancelación"]; // array
const resultado = { intencion: "reserva", confianza: 0.85 }; // objeto
```

---

### ¿Qué estructuras de control habéis usado y por qué (selección, repetición, saltos)?
Se usan condicionales (`if`, `else`) para tomar decisiones y bucles (`for`, `forEach`, `reduce`) para recorrer listas y procesar datos.

**Ejemplo real:**
```javascript
if (confianza > 0.7) {
  console.log("Intención detectada");
} else {
  console.log("No se detectó intención");
}

for (let i = 0; i < intenciones.length; i++) {
  console.log(intenciones[i]);
}
```
En el código también se usa `reduce` para encontrar la mejor clasificación:
```javascript
const mejor = clasificaciones.reduce((a, b) => (a.value > b.value ? a : b));
```

---

### ¿Habéis implementado control de excepciones? ¿Cómo gestionáis errores?
Sí, se usan bloques `try...catch` para manejar errores al leer o escribir archivos, y comprobaciones con `if` para validar datos.

**Ejemplo real:**
```javascript
try {
  const datos = fs.readFileSync('entrenamiento.json');
} catch (error) {
  console.error("Error al leer el archivo:", error);
}
```
Y comprobación de datos:
```javascript
if (!mensaje) return res.status(400).json({ error: "Mensaje vacío" });
```

---

### ¿Habéis documentado el código mediante comentarios o docstrings?
Sí, hay comentarios explicativos en funciones y partes importantes del código.

**Ejemplo real:**
```javascript
// Esta función analiza el mensaje y devuelve la intención detectada
function detectarIntencion(texto = "") {
  // ...código...
}
```

---

### ¿Qué paradigma habéis aplicado (estructurada, orientada a objetos)? ¿Por qué lo habéis elegido?
Se usa programación estructurada y modular, con funciones y módulos, porque el proyecto es sencillo y así es más fácil de mantener.

---

### ¿Qué clases y objetos principales forman vuestro proyecto? ¿Cómo se relacionan entre sí?
No se usan clases, pero sí objetos para almacenar resultados, frases de entrenamiento e historial de conversaciones.  
Por ejemplo, el objeto resultado:
```javascript
const resultado = {
  fecha: new Date().toISOString(),
  mensaje_original: texto,
  intencion_detectada: label,
  confianza,
  sugerencia: necesitaRecep ? "..." : RESPUESTAS[label],
  necesita_recepcionista: necesitaRecep,
};
```

---

### ¿Habéis usado conceptos avanzados como herencia, polimorfismo o interfaces? Explicad su aplicación.
No, el proyecto no requiere herencia ni polimorfismo. Se usan funciones y objetos simples.

---

### ¿Habéis gestionado la información mediante archivos? ¿Usáis ficheros o interfaces gráficas para la interacción del usuario?
Sí, se usan archivos JSON (`entrenamiento.json`, `historial.json`) para guardar datos.  
La interacción con el usuario es mediante una interfaz web (`index.html`).

**Ejemplo real de lectura/escritura:**
```javascript
let data = JSON.parse(fs.readFileSync(TRAIN_PATH));
fs.writeFileSync(HIST_PATH, JSON.stringify(hist.slice(0, 100), null, 2));
```

---

### ¿Qué estructuras de datos estáis utilizando (listas, matrices, colecciones)? ¿Por qué?
Se usan arrays y objetos porque son fáciles de manejar en JavaScript y permiten organizar frases, intenciones e historial.

---

### ¿Habéis aplicado técnicas avanzadas como expresiones regulares o flujos de entrada/salida?
Sí, se usan expresiones regulares para buscar palabras clave y flujos de entrada/salida para leer y escribir archivos JSON.

**Ejemplo real:**
```javascript
if (/reservar/.test(mensaje)) {
  // El mensaje contiene la palabra "reservar"
}
```
Y para entrada/salida:
```javascript
fs.readFileSync('entrenamiento.json');
fs.writeFileSync('historial.json', datos);
```

---

## Sistemas Informáticos

### ¿Qué características tiene el hardware donde se ejecuta vuestro desarrollo?
Desarrollamos en un Mac con procesador Intel/Apple Silicon, 8GB de RAM mínimo. En producción, puede ejecutarse en cualquier servidor compatible con Node.js.

---

### ¿Qué sistema operativo habéis seleccionado para vuestro entorno de desarrollo y producción? ¿Por qué?
Usamos macOS en desarrollo por comodidad y Linux en producción por estabilidad y compatibilidad con Node.js.

---

### ¿Cómo habéis configurado las redes para vuestro proyecto?
El servidor Express escucha en un puerto local (por ejemplo, 3000) y responde a peticiones HTTP. No se ha configurado seguridad avanzada, pero se recomienda usar HTTPS en producción.

---

### ¿Habéis implementado sistemas de copias de seguridad? ¿Cuál es vuestra estrategia?
Actualmente no, pero se recomienda hacer copias periódicas de los archivos JSON.

---

### ¿Qué medidas habéis tomado para asegurar la integridad y seguridad de vuestros datos?
Se recomienda restringir el acceso a los archivos JSON y usar HTTPS para proteger la comunicación.

---

### ¿Cómo habéis configurado usuarios, permisos y accesos en el sistema operativo?
No se ha configurado gestión de usuarios específica, pero se recomienda ejecutar el servidor con permisos limitados.

---

### ¿Habéis documentado la configuración técnica y la gestión del sistema informático?
La configuración básica está documentada en el README.md.

---

## Entornos de Desarrollo

### ¿Qué entorno de desarrollo (IDE) estáis utilizando y cómo lo habéis configurado?
Usamos Visual Studio Code, con extensiones para JavaScript y Node.js.

---

### ¿Cómo automatizáis tareas en vuestro entorno de desarrollo?
Podemos usar scripts de npm para ejecutar el servidor y automatizar tareas.

---

### ¿Utilizáis control de versiones? ¿Qué plataforma? ¿Cómo gestionáis versiones y ramas?
Sí, usamos Git y GitHub. Trabajamos en la rama principal y creamos ramas para nuevas funcionalidades.

---

### ¿Qué estrategia seguís para refactorizar vuestro código?
Revisamos el código periódicamente y extraemos funciones o módulos cuando es necesario.

---

### ¿Cómo documentáis técnicamente el proyecto?
Usamos archivos Markdown (`README.md`) y comentarios en el código.

---

### ¿Habéis creado diagramas de clases o diagramas de comportamiento?
No, pero se recomienda hacer diagramas para proyectos más grandes.

---

## Bases de Datos

### ¿Qué sistema gestor de bases de datos habéis seleccionado? ¿Por qué?
Usamos archivos JSON como base de datos no relacional, porque es sencillo y suficiente para este proyecto.

---

### ¿Cómo habéis diseñado el modelo entidad-relación?
No usamos modelo entidad-relación formal, pero los archivos JSON estructuran los datos por intención y por historial.

---

### ¿Usáis vistas, procedimientos almacenados, disparadores o funciones avanzadas?
No, porque no usamos un SGBD tradicional.

---

### ¿Implementáis mecanismos específicos para proteger y recuperar datos?
No, pero se recomienda hacer copias de seguridad de los archivos JSON.

---

## Lenguajes de Marcas y Sistemas de Gestión de Información

### ¿Cómo habéis estructurado vuestros documentos HTML? ¿Aplicáis buenas prácticas y estándares web?
Sí, usamos etiquetas semánticas y estructura clara en los archivos HTML.

---

### ¿Qué tecnologías utilizáis para el frontend (CSS, JavaScript)? ¿Por qué esas tecnologías?
Usamos HTML, CSS y JavaScript porque son estándar para aplicaciones web.

---

### ¿Utilizáis JavaScript para interactuar con el DOM?
Sí, para mostrar resultados y estadísticas en la interfaz web.

---

### ¿Habéis validado vuestros documentos HTML y CSS?
No de forma automática, pero seguimos buenas prácticas.

---

### ¿Habéis implementado la conversión de datos entre formatos (XML, JSON)? ¿Por qué?
Usamos JSON para almacenar y transferir datos porque es fácil de usar en JavaScript.

---

### ¿Vuestra aplicación interactúa con sistemas de gestión empresarial o herramientas específicas?
Sí, está pensada para integrarse en un PMS (Personal Management System), por lo que es una aplicación de gestión empresarial.

---

## Proyecto intermodular

### ¿Qué objetivo cumple vuestro software?
Automatizar la detección de intenciones en mensajes de clientes de hotel.

---

### ¿Qué necesidad cubre o qué problema soluciona?
Agiliza la atención al cliente y automatiza respuestas frecuentes en hoteles.

---

### ¿Cuál es el stack de tecnologías que habéis elegido y por qué?
Node.js, Express, natural (NLP), HTML, CSS, JavaScript y JSON, porque son tecnologías modernas, sencillas y bien documentadas.

---

### ¿Cómo habéis planteado el desarrollo por versiones?
Primero una versión mínima funcional (detectar intenciones), y después se añadirán mejoras como panel gráfico, detección de tono, exportación de historial, integración real, multiusuario y dashboard.

---