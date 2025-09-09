export const cartas = document.querySelectorAll('.carta');
export const contenedor = document.getElementById('container');
export const btnCerrarDialogo = document.getElementById("btnCerrarDialogo");
export const dialogPartidaGanada = document.getElementById("dialogPartidaGanada");
export const display = document.getElementById("display");

const estiloRoot = getComputedStyle(document.documentElement);
export const colorCartaVolteada = estiloRoot.getPropertyValue('--colorCartaVolteada').trim();
export const colorCarta = estiloRoot.getPropertyValue('--colorCarta').trim();
