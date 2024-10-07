import { 
    botonDameCarta,
    botonMePlanto,
    botonNuevaPartida,
    mePlantoClick,
    reiniciarPartidaClick,
    dameCartaClick,
} from './ui';

document.addEventListener("DOMContentLoaded", reiniciarPartidaClick);


if(botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.addEventListener("click", dameCartaClick);
};


if(botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.addEventListener("click", mePlantoClick);
};


if(botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.addEventListener("click", reiniciarPartidaClick);
};


