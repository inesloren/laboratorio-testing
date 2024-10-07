import { partida, Carta } from './model';

import { 
    generarNumeroAleatorio,
    generarNumeroCarta,
    obtenerPuntosCarta,
    obtenerUrlCarta,
    sumarPuntos,
    actualizarPuntos,
    mePlantoMensaje,
    obtenerEstadoPartida,
} from './motor';

export const pintarUrlCarta = (urlCarta: string) => {
	const imagenCarta = document.getElementById('imagen-carta');
	
	if (imagenCarta && imagenCarta instanceof HTMLImageElement) {
		imagenCarta.src = urlCarta;
	}
};

export const muestraPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    if(elementoPuntuacion && elementoPuntuacion instanceof HTMLParagraphElement) {
        elementoPuntuacion.innerHTML = `Tu puntuación es<br><span>${partida.puntuacionUsuario}</span>`;
    }
};

export const gestionarGameOver = () => {
    if (obtenerEstadoPartida() === "tehaspasado") {
        const elementoResultado = document.getElementById("resultado");
        if(elementoResultado && elementoResultado instanceof HTMLParagraphElement){
            elementoResultado.innerHTML = `¡Game Over!`;
        }

        const elementoNuevaPartida =  document.getElementById("nuevapartida");
        if(elementoNuevaPartida && elementoNuevaPartida instanceof HTMLButtonElement){
            elementoNuevaPartida.style.display = "block";
        }
    }

    if(obtenerEstadoPartida() === "máximo") {
        const elementoResultado = document.getElementById("resultado");
        if(elementoResultado && elementoResultado instanceof HTMLParagraphElement){
            elementoResultado.innerHTML = `¡Lo has clavado, enhorabuena!`;
        }
        const elementoNuevaPartida =  document.getElementById("nuevapartida");
        if(elementoNuevaPartida && elementoNuevaPartida instanceof HTMLButtonElement){
            elementoNuevaPartida.style.display = "block";
        }
    }
};

export const deshabilitarBotonesCuandoHePerdido = (puntuacionUsuario: number) => {
    if (puntuacionUsuario > 7.5) {
        const botonDameCarta = document.getElementById("dame-carta");
        if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
            botonDameCarta.disabled = true;
        }
        const botonMePlanto = document.getElementById("meplanto");
        if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
            botonMePlanto.disabled = true;
        }
    }
}

export const deshabilitarBotonesCuandoHeGanado = (puntuacionUsuario: number) => {
    if (puntuacionUsuario === 7.5) {
        const botonDameCarta = document.getElementById("dame-carta");
        if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
            botonDameCarta.disabled = true;
        }
        const botonMePlanto = document.getElementById("meplanto");
        if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
            botonMePlanto.disabled = true;
        }
    }
}

export const deshabilitarBotonesCuandoMePlanto = () => {
        const botonDameCarta = document.getElementById("dame-carta");
        if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
            botonDameCarta.disabled = true;
        }
        const botonMePlanto = document.getElementById("meplanto");
        if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
            botonMePlanto.disabled = true;
        }
        const elementoNuevaPartida =  document.getElementById("nuevapartida");
        if(elementoNuevaPartida && elementoNuevaPartida instanceof HTMLButtonElement){
        elementoNuevaPartida.style.display = "block";
        }  
};

export const mostraMensajeMePlanto = (mensaje:string) => {
    const elementoResultado = document.getElementById("resultado");
    if(elementoResultado && elementoResultado instanceof HTMLParagraphElement){
        elementoResultado.innerHTML = mensaje;
    }
};


export const reiniciarMensaje = (): void=> {
    const elementoResultado = document.getElementById("resultado");
        if(elementoResultado && elementoResultado instanceof HTMLParagraphElement){
            elementoResultado.innerHTML = "";
        }
};

export const reiniciarImagenCarta = () => {
    const imagenCarta = document.getElementById("imagen-carta");
    if(imagenCarta && imagenCarta instanceof HTMLImageElement){
        imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
    }
};

export const habilitarBotonesNuevaPartida = () => {
    const botonDameCarta = document.getElementById("dame-carta");
    if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
        botonDameCarta.disabled = false;
    }
    const botonMePlanto = document.getElementById("meplanto");
    if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
        botonMePlanto.disabled = false;
    }
    const elementoNuevaPartida =  document.getElementById("nuevapartida");
    if(elementoNuevaPartida && elementoNuevaPartida instanceof HTMLButtonElement){
    elementoNuevaPartida.style.display = "none";
    }  
};

export const dameCartaClick = (): void => {
    const numeroAleatorio = generarNumeroAleatorio();
    const carta = generarNumeroCarta(numeroAleatorio) as Carta;
    let urlCarta = obtenerUrlCarta(carta);
    pintarUrlCarta(urlCarta);
    const puntos = obtenerPuntosCarta(carta);
    const puntosSumados = sumarPuntos(puntos);
    actualizarPuntos(puntosSumados);
    muestraPuntuacion();
    gestionarGameOver();
    deshabilitarBotonesCuandoHePerdido(partida.puntuacionUsuario);
    deshabilitarBotonesCuandoHeGanado(partida.puntuacionUsuario);
}

export const mePlantoClick = ():void => {
    deshabilitarBotonesCuandoMePlanto();
    const mensaje = mePlantoMensaje();
    mostraMensajeMePlanto(mensaje);
};

export const reiniciarPartidaClick = ():void => {
    partida.puntuacionUsuario = 0;
    partida.estadoPartida = "pordebajodesieteymedio",
    muestraPuntuacion();
    habilitarBotonesNuevaPartida();
    reiniciarImagenCarta();
    reiniciarMensaje();
};

export const botonDameCarta = document.getElementById("dame-carta");

export const botonMePlanto = document.getElementById("meplanto");

export const botonNuevaPartida = document.getElementById("nuevapartida");