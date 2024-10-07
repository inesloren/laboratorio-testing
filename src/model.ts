interface Partida{
    puntuacionUsuario: number;
    estadoPartida: Estadopartida;
}

export const partida: Partida = {
    puntuacionUsuario: 0,
    estadoPartida: "pordebajodesieteymedio",
}

export type Estadopartida = "pordebajodesieteymedio" | "máximo" | "tehaspasado";

export type Carta = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10 | 11 | 12;

