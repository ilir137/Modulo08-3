import { btnCerrarDialogo, dialogPartidaGanada } from './elementos.js';
import { crearTablero, agregarEventoBotonIniciarPartida, cerrarDialogo } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    crearTablero();
    agregarEventoBotonIniciarPartida();
})

if (btnCerrarDialogo && btnCerrarDialogo instanceof HTMLButtonElement){
    btnCerrarDialogo.addEventListener("click", () => {
        cerrarDialogo(dialogPartidaGanada);
    })
}
