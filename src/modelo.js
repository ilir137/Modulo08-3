export const animal1 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png"; // Leon
export const animal2 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png"; // Buho
export const animal3 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png"; // Perro
export const animal4 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png"; // Gallina
export const animal5 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png"; // Cerdo
export const animal6 = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png"; // Abeja

export const animales = [animal1, animal2, animal3, animal4, animal5, animal6, animal1, animal2, animal3, animal4, animal5, animal6];

var imagen, imagenAnterior;
var puntos = 0;

export function setImagen(valor){
    imagen = valor;
}

export function getImagen(){
    return imagen;
}

export function setImagenAnterior(valor){
    imagenAnterior = valor;
}

export function getImagenAnterior(){
    return imagenAnterior;
}

export function setPuntos(valor){
    puntos = valor;
}

export function getPuntos(){
    return puntos
}