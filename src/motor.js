const generarNumeroAleatorio = (indiceDelArray) =>  Math.floor(Math.random() * (indiceDelArray + 1));

const barajarCartas = (cartas) => {
    const copiaCartas = [...cartas];
    for (let indice = copiaCartas.length - 1; indice > 0; indice--) {
        let indiceAleatorio = generarNumeroAleatorio(indice);

        [{ ...copiaCartas[indice] }, { ...copiaCartas[indiceAleatorio] }] = [
        copiaCartas[indiceAleatorio],
        copiaCartas[indice],
        ];
    }
    return copiaCartas;
};

export const esPartidaCompleta = (tablero) => {
    return tablero.cartas.every((carta) => {
        return carta.encontrada && carta.estaVuelta;
    })
}

export const esVolteableLaCarta = (tablero, indice) => {
    return !tablero.cartas[indice].encontrada && !tablero.cartas[indice].estaVuelta;
}

export const voltearLaCarta = (tablero, indice) => {
    tablero.cartas[indice].estaVuelta = true;

    if (tablero.estadoPartida === 'CeroCartasLevantadas') {
        tablero.indiceCartaVolteadaA = indice;
        tablero.estadoPartida = 'UnaCartaLevantada';
    } else if (tablero.estadoPartida === 'UnaCartaLevantada') {
        tablero.indiceCartaVolteadaB = indice;
        tablero.estadoPartida = 'DosCartasLevantadas';
    }
}

export const parejaEncontrada = (tablero, indiceA, indiceB) => {
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceB].encontrada = true;
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
    tablero.estadoPartida = 'CeroCartasLevantadas';
}

export const parejaNoEncontrada = (tablero, indiceA, indiceB) => {
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceB].estaVuelta = false;
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
    tablero.estadoPartida = 'CeroCartasLevantadas';
}

export const sonPareja = (indiceA, indiceB, tablero) => {
    return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;
}

export const iniciaPartida = (tablero) => {
    const cartasBarajadas = barajarCartas(tablero.cartas);
    tablero.cartas = [...cartasBarajadas];
    tablero.estadoPartida = 'CeroCartasLevantadas';
}
