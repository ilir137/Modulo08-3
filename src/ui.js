import { colorCartaVolteada } from "./elementos.js";
import { inicializar, sonPareja, parejaNoEncontrada } from "./motor.js"
import { getImagen, setImagen, getImagenAnterior, setImagenAnterior, getPuntos, setPuntos } from "./modelo.js"

export function voltearCarta(carta, index, baraja, cartaAnterior){
    carta.classList.add('volteada'); // Agregar clase para el efecto de volteo
    setTimeout(() => {
        carta.style.backgroundColor = colorCartaVolteada;
        carta.innerHTML = `<img src="${baraja[index]}" alt="Animal" class="imgAnimal">`;

        if (getImagen() !== undefined) setImagenAnterior( getImagen() );
        setImagen(baraja[index]);

        if (getImagenAnterior() !== getImagen() && getImagenAnterior() !== undefined){  // Si las 2 ultimas imagenes son diferentes pero la primera no es undefined
            parejaNoEncontrada(carta, cartaAnterior);
        }
        if (getImagenAnterior() === getImagen() && getImagen() !== undefined){ // Si las imagenes son iguales y no sean undefined
            sonPareja();
        }
        if (getPuntos() === 6){
            console.log("Has ganao");
            alert("Has ganado");
            inicializar();
        }
    }, 300); // Espera a que pasen 0,3s, la mitad de la transicion anterior de 0,6s
}