import { colorCarta, cartas } from "./elementos.js";
import { getImagen, setImagen, getImagenAnterior, setImagenAnterior, getPuntos, setPuntos } from "./modelo.js"

export function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Elegir un índice aleatorio entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));
        
        // Intercambiar elementos array[i] y array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function ponerEstiloPorDefectoCarta(carta){
    carta.classList.remove('volteada');
    carta.style.backgroundColor = colorCarta;
    carta.innerHTML = "";
}

export function inicializar(){
    cartas.forEach((carta) => {
        ponerEstiloPorDefectoCarta(carta);
    });
    setImagenAnterior(undefined);
    setImagen(undefined);
    setPuntos(0);
}

export function sonPareja(){
    console.log("Cartas iguales", getImagen(), getImagenAnterior());

    setImagenAnterior(undefined);
    setImagen(undefined);
    setPuntos(getPuntos()+1);
    console.log(getPuntos());
}

export function parejaNoEncontrada(carta, cartaAnterior){
    console.log("imagenes diferentes", getImagen(), getImagenAnterior());

    ponerEstiloPorDefectoCarta(carta);
    ponerEstiloPorDefectoCarta(cartaAnterior);

    setImagenAnterior(undefined);
    setImagen(undefined);
}