// manejar carga de estadísticas en stats.html
async function cargar() {
  const totalEl = document.getElementById("total");
  const tabla = document.getElementById("tabla");
  totalEl.textContent = 'Cargando estadísticas...';
  tabla.innerHTML = '';
  try {
    const res = await fetch("/stats");
    if (!res.ok) throw new Error('Error al obtener estadísticas');
    const data = await res.json();
    totalEl.innerHTML = `<p>Total: ${data.total}</p>`;
    for (let key in data.stats) {
      tabla.innerHTML += `<tr><td>${key}</td><td>${data.stats[key]}</td></tr>`;
    }
  } catch (err) {
    totalEl.textContent = '⚠️ No se pudieron cargar las estadísticas.';
    console.error(err);
  }
}

window.addEventListener('load', cargar);
