import { vi } from "vitest";
import {
    generarNumeroAleatorio,
    generarNumeroCarta,
    obtenerPuntosCarta,
    sumarPuntos,
    actualizarPuntos,
    obtenerEstadoPartida,
    mePlantoMensaje,
} from './motor';

import { partida } from './model';

describe("generarNumeroAleatorio", () => {
    it("Debería devolver un numero entre 1 y 10", () => {
      // Act
      const numero = generarNumeroAleatorio();
      // Assert
      expect(numero).toBeGreaterThanOrEqual(1);
      expect(numero).toBeLessThanOrEqual(10);
    });
  });

describe("generarNumeroCarta", () => {
    it("Debería devolver el mismo numero si es menor que 7", () => {
      // Arrange
      const numeroAleatorio = 5;
      //Act
        const carta = generarNumeroCarta(numeroAleatorio);
      // Assert
      expect(carta).toBe(5);
    });

    it("Debería devolver el numero pero sumandole dos si es mayor que 7", () => {
        // Arrange
        const numeroAleatorio = 8;
        //Act
          const carta = generarNumeroCarta(numeroAleatorio);
        // Assert
        expect(carta).toBe(10);
      });
  });

describe("obtenerPuntosCarta", () => {
    it("Devuelve 0.5 si la carta es mayor a 7", () => {
        //Arrange
        const carta = 10;
        //Act
        const puntos = obtenerPuntosCarta(carta);
        //Assert
        expect(puntos).toBe(0.5);
    });

    it("Devuelve el mismo numero de la carta si la carta es menor o igual a 7", () => {
        //Arrange
        const carta = 7;
        //Act
        const puntos = obtenerPuntosCarta(carta);
        //Assert
        expect(puntos).toBe(7);
    });
});

describe("sumarPuntos", () => {
    it("Devuelve los puntos de usuario sumados a puntos", () => {
        //Arrange
        const puntos : number = 2;
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(5);

        //Act
        const puntosSumados : number = sumarPuntos(puntos);

        //Asssert
        expect(puntosSumados).toBe(7);

    });
});

describe("actualizarPuntos", () => {
    it("Debe actualizar correctamente la puntuación del usuario", () => {
        // Arrange
        const puntosSumados: number = 2;
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(1);

        // Act
        const resultado = actualizarPuntos(puntosSumados);

        // Assert
        expect(resultado).toBe(2);
    });
});

describe("obtenerEstadoPartida", () => {
    it("Debe devolver 'máximo' cuando la puntuación es exactamente 7.5", () => {
        // Arrange
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(7.5);
        partida.estadoPartida = "pordebajodesieteymedio";

        // Act
        const estado = obtenerEstadoPartida();

        // Assert
        expect(estado).toBe("máximo");
    });

    it("Debe devolver 'tehaspasado' cuando la puntuación es mayor a 7.5", () => {
        // Arrange
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(8);
        partida.estadoPartida = "pordebajodesieteymedio";

        // Act
        const estado = obtenerEstadoPartida();

        // Assert
        expect(estado).toBe("tehaspasado");
    });

    it("Debe mantener el estado actual si la puntuación es menor a 7.5", () => {
        // Arrange
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(6);
        partida.estadoPartida = "pordebajodesieteymedio";

        // Act
        const estado = obtenerEstadoPartida();

        // Assert
        expect(estado).toBe("pordebajodesieteymedio"); 
    });
});

describe("mePlantoMensaje", () => {
    it("Debe devolver 'Has sido muy conservador' si la puntuación es menor a 4 o 4.5", () => {
        // Arrange
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(3);

        // Act
        const mensaje = mePlantoMensaje();

        // Assert
        expect(mensaje).toBe("Has sido muy conservador");
    });

    it("Debe devolver 'Has sido muy conservador' si la puntuación es exactamente 4.5", () => {
        // Arrange
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(4.5);

        // Act
        const mensaje = mePlantoMensaje();

        // Assert
        expect(mensaje).toBe("Has sido muy conservador");
    });

    it("Debe devolver 'Te ha entrado el canguelo eh?' si la puntuación es 5 o 5.5", () => {
        // Arrange
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(5);

        // Act
        const mensaje = mePlantoMensaje();

        // Assert
        expect(mensaje).toBe("Te ha entrado el canguelo eh?");
    });

    it("Debe devolver 'Te ha entrado el canguelo eh?' si la puntuación es exactamente 5.5", () => {
        // Arrange
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(5.5);

        // Act
        const mensaje = mePlantoMensaje();

        // Assert
        expect(mensaje).toBe("Te ha entrado el canguelo eh?");
    });

    it("Debe devolver 'Casi casi...' si la puntuación es 6 o 6.5", () => {
        // Arrange
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(6);

        // Act
        const mensaje = mePlantoMensaje();

        // Assert
        expect(mensaje).toBe("Casi casi...");
    });

    it("Debe devolver 'Casi casi...' si la puntuación es exactamente 7", () => {
        // Arrange
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(7);

        // Act
        const mensaje = mePlantoMensaje();

        // Assert
        expect(mensaje).toBe("Casi casi...");
    });

    it("Debe devolver 'No debería de estar aquí' si la puntuación es un valor inesperado", () => {
        // Arrange
        vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(8);

        // Act
        const mensaje = mePlantoMensaje();

        // Assert
        expect(mensaje).toBe("No debería de estar aquí");
    });
});