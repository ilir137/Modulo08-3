const infoCartas = [
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
  },
  {
    idFoto: 6,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
  },
];

const crearColeccionDeCartasInicial = (infoCartas) => {

    const cartasTransformadas = infoCartas.map((carta) => {
        return {
        idFoto: carta.idFoto,
        imagen: carta.imagen,
        encontrada: false,
        estaVuelta: false,
        }
    });

  return [...cartasTransformadas, ...cartasTransformadas];
}

let cartas = crearColeccionDeCartasInicial(infoCartas);

// type EstadoPartida =
//   | "PartidaNoIniciada"
//   | "CeroCartasLevantadas"
//   | "UnaCartaLevantada"
//   | "DosCartasLevantadas"
//   | "PartidaCompleta";

export let tablero = {
    cartas: cartas,
    estadoPartida: "PartidaNoIniciada",
    indiceCartaVolteadaA: undefined,
    indiceCartaVolteadaB: undefined,
};
