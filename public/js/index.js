// manejar interacción del usuario en index.html
const btn = document.getElementById('analizar-btn');
const input = document.getElementById('mensaje');
const chat = document.getElementById('chat');
const sugerenciasDiv = document.getElementById('sugerencias');

async function analizar() {
  const mensaje = input.value.trim();
  if (!mensaje) return;
  btn.disabled = true;
  // Mostrar mensaje del usuario en chat
  chat.innerHTML += `<div class="message user"><div class="bubble user">${mensaje}</div></div>`;
  chat.scrollTop = chat.scrollHeight;
  sugerenciasDiv.innerHTML = '';
  try {
    const res = await fetch('/analizar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mensaje }),
    });
    const data = await res.json();
    // Mostrar respuesta en chat
    const textoResp = res.ok ? data.answer : (data.error || 'Error al procesar la solicitud.');
    chat.innerHTML += `<div class="message bot"><div class="bubble bot">${textoResp}</div></div>`;
    chat.scrollTop = chat.scrollHeight;
    // Mostrar sugerencias si existen
    if (res.ok && data.suggestions && data.suggestions.length) {
      data.suggestions.forEach(text => {
        const btnS = document.createElement('button');
        btnS.textContent = text;
        btnS.addEventListener('click', () => {
          input.value = text;
          analizar();
        });
        sugerenciasDiv.appendChild(btnS);
      });
    }
  } catch (err) {
    // Mostrar error de red en chat
    chat.innerHTML += `<div class="message bot"><div class="bubble bot">⚠️ Error de red. Inténtalo de nuevo.</div></div>`;
    chat.scrollTop = chat.scrollHeight;
  } finally {
    btn.disabled = false;
  }
}

btn.addEventListener('click', analizar);
