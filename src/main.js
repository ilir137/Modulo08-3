import { cartas } from "./elementos.js";
import { animales } from "./modelo.js";
import { mezclarArray } from "./motor.js";
import { voltearCarta } from "./ui.js"

const barajaCartas = mezclarArray(animales.slice()); // Usamos .slice() para no modificar el original
var cartaAnterior;

if (cartas !== null && cartas !== undefined) {
    cartas.forEach((carta, index) => {
        cartaAnterior = carta;
        carta.addEventListener('click', () => {
            voltearCarta(carta, index, barajaCartas, cartaAnterior);
            cartaAnterior = carta;
        });
    });
}
