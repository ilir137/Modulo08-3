export const cartas = document.querySelectorAll('.carta');
export const contenedor = document.getElementById('container');

const estiloRoot = getComputedStyle(document.documentElement);
export const colorCartaVolteada = estiloRoot.getPropertyValue('--colorCartaVolteada').trim();
export const colorCarta = estiloRoot.getPropertyValue('--colorCarta').trim();