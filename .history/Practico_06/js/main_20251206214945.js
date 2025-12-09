// 1 — Leer el contenido del <title> e imprimirlo
console.log(document.title);
function capitalizar(texto) {
    if (!texto) return "";
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// Aplicar capitalización a cada elemento de una lista
function normalizarLista(lista) {
    return lista.map(item => capitalizar(item.trim()));
}