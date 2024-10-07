import { Carta, Estadopartida, partida } from './model';

export const generarNumeroAleatorio = () => {
	return Math.floor (Math.random() * 10) + 1;
};

export const generarNumeroCarta = (numeroAleatorio: number) => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio + 2;
    }
    return numeroAleatorio;
};

export const obtenerUrlCarta = (carta: Carta) => {
    switch (carta) {
        case 1:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        case 2:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        case 3:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        case 4:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        case 5:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        case 6:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        case 7:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        case 10:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        case 11:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        case 12:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        default:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    }
}

export const obtenerPuntosCarta = (carta: number) => {
	if (carta > 7) {
		return 0.5;
	}
	return carta;
};

export const sumarPuntos = (puntos: number) => {
	return partida.puntuacionUsuario + puntos;
};

export const actualizarPuntos = (puntosSumados: number) => {
	partida.puntuacionUsuario = puntosSumados;
    return partida.puntuacionUsuario;
};

export const mePlantoMensaje = () => {
    let mensaje = "";
        
        if (partida.puntuacionUsuario < 4 || partida.puntuacionUsuario === 4.5) {
            mensaje = "Has sido muy conservador";
        } else if (partida.puntuacionUsuario === 5 || partida.puntuacionUsuario === 5.5) {
            mensaje = "Te ha entrado el canguelo eh?";
        } else if (partida.puntuacionUsuario === 6 || partida.puntuacionUsuario === 6.5) {
            mensaje = "Casi casi...";
        } else if (partida.puntuacionUsuario === 7) {
            mensaje = "Casi casi...";
        } else {
            mensaje = "No debería de estar aquí";
        }
        return mensaje;
    };

export const obtenerEstadoPartida = ():Estadopartida => {
    if (partida.puntuacionUsuario === 7.5) {
        partida.estadoPartida = "máximo";
    }
    if (partida.puntuacionUsuario > 7.5) {
        partida.estadoPartida = "tehaspasado";
    } 
    return partida.estadoPartida;
}
