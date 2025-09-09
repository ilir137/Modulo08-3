import { display } from './elementos.js';
import { tablero, tiempoDeJuego } from './modelo.js';
import {
    iniciaPartida, 
    esVolteableLaCarta, 
    voltearLaCarta, 
    sonPareja, 
    parejaEncontrada, 
    parejaNoEncontrada,
    esPartidaCompleta,
    aumentarTiempo,
    formatearTiempo
} from './motor.js';

let intervalo;

export const crearTablero = () => {
    for (let indice = 0; indice < tablero.cartas.length; indice++) {
        mapearDivsACarta(indice, tablero);
    }
}

const mapearDivsACarta = (indiceCarta, tablero) => {
    const dataIndiceId = `[data-indice-id="${indiceCarta}"]`;
    const elementoDiv = document.querySelector(`div${dataIndiceId}`);

    if (elementoDiv && elementoDiv instanceof HTMLDivElement) {
        elementoDiv.addEventListener('click', () => {
            if (tablero.estadoPartida !== 'PartidaNoIniciada' && tablero.estadoPartida !== 'PartidaCompleta') {
                if (esVolteableLaCarta(tablero, indiceCarta)) {
                    sePuedeVoltearLaCarta(indiceCarta, dataIndiceId);
                } else {
                    noSePuedeVoltearLaCarta();
                }
            }
        })
    }
}

const sePuedeVoltearLaCarta = (indiceCarta, dataIndiceId) => {
    console.log('se puede voltear la carta');
    voltearLaCarta(tablero, indiceCarta);
    mostrarImagenAnimal(dataIndiceId, indiceCarta);
    mirarSiEsLaSegundaCarta(tablero)
}

const mirarSiEsLaSegundaCarta = (tablero) => {
    const indiceCartaA = tablero.indiceCartaVolteadaA;
    const indiceCartaB = tablero.indiceCartaVolteadaB;

    if (indiceCartaA !== undefined && indiceCartaB !== undefined) {
        if (sonPareja(indiceCartaA, indiceCartaB, tablero)) {
            parejaEncontrada(tablero, indiceCartaA, indiceCartaB);
            if (esPartidaCompleta(tablero)) {
                console.log('Has completado la partida. Enhorabuena, encontraste todas las parejas!!');
                mostrarDialogo();
                pararCronometro();
            }
        } else {
            parejaNoEncontrada(tablero, indiceCartaA, indiceCartaB);
            setTimeout(() => { ponerImagenBocaAbajo(tablero.cartas); }, 700);
        }
    }
    console.log(tablero);
}

const ponerImagenBocaAbajo = (cartas) => {
    for (let indice = 0; indice < cartas.length; indice++) {
        ocultarImagenAnimal(cartas, indice);
    }
}

const noSePuedeVoltearLaCarta = () => {
    console.log('no se puede voltear la carta');
}

const mostrarImagenAnimal = (dataIndiceId, indiceCarta) => {
    const elementoImg = document.querySelector(`img${dataIndiceId}`);

    if (elementoImg && elementoImg instanceof HTMLImageElement) {
        elementoImg.src = tablero.cartas[indiceCarta].imagen;
    }
}

function ocultarImagenAnimal(cartas, indice){
    if (!cartas[indice].encontrada && !cartas[indice].estaVuelta) {
        const dataIndiceId = `[data-indice-id="${indice}"]`;
        const elementoImg = document.querySelector(`img${dataIndiceId}`);

        if (elementoImg && elementoImg instanceof HTMLImageElement) {
            elementoImg.removeAttribute("src");
        }
    }
}

export const agregarEventoBotonIniciarPartida = () => {
    const botonEmpezarPartida = document.getElementById('botonEmpezarPartida');
    console.log(tablero);
    if (botonEmpezarPartida && botonEmpezarPartida instanceof HTMLButtonElement) {
        botonEmpezarPartida.addEventListener('click', () => {
            iniciaPartida(tablero);
            intervalo = setInterval(() => {
                aumentarTiempo(tiempoDeJuego);
                actualizarDisplay(tiempoDeJuego);
            }, 1000);
        })
    }
}

export function cerrarDialogo(elemento) {
    const idElemento = elemento.id;

    const modal = document.getElementById(idElemento);
    modal.close();
}

function mostrarDialogo(){
    window.dialogPartidaGanada.showModal();
}

function actualizarDisplay(tiempoDeJuego) {
    display.textContent =
        `${formatearTiempo(tiempoDeJuego.horas)}:${formatearTiempo(tiempoDeJuego.minutos)}:${formatearTiempo(tiempoDeJuego.segundos)}`;
}

function pararCronometro(){
    clearInterval(intervalo);
    /*
    tiempoDeJuego.segundos = 0;
    tiempoDeJuego.minutos = 0;
    tiempoDeJuego.horas = 0;
    actualizarDisplay(tiempoDeJuego);
    */
}
