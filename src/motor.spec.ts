import {describe, it, vi} from "vitest";
import {obtenerMensajeSegunPuntos, generarCarta, generarNumeroAleatorio, generarValorCarta} from "./motor"
import {partida} from "./modelo"
// import { beforeEach } from "vitest";

describe("obtenerMensajeSegunPuntos", () => {
  it("debería devolver 'Juego de las siete media' cuando puntos son 0", () => {
    // Arrange
    const puntos:number = 0;
    // Act
    const resultado:string = obtenerMensajeSegunPuntos(puntos);
    // Assert
    expect(resultado).toBe("Juego de las siete media");
  });

  it("debería devolver 'Has sido muy conservador' cuando puntos son menores que 4", () => {
    // Arrange
    const resultadoEsperado:string = "Has sido muy conservador";
    const puntos:number = 3;
    vi.spyOn(partida, "puntos","get").mockReturnValue(3);
    // Act
    const resultado:string = obtenerMensajeSegunPuntos(puntos);
    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("debería devolver 'Te ha entrado el canguelo eh?' cuando puntos son mayores o iguales a 4 y menores que 6", () => {
    // Arrange
    const resultadoEsperado:string = "Te ha entrado el canguelo eh?";
    const puntos:number = 4.5;
    vi.spyOn(partida, "puntos","get").mockReturnValue(4.5);
    // Act
    const resultado:string = obtenerMensajeSegunPuntos(puntos);
    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("debería devolver 'Casi casi...' cuando puntos son mayores o iguales a 6 y menores o iguales a 7", () => {
    // Arrange
    const resultadoEsperado:string = "Casi casi...";
    const puntos:number = 7;
    vi.spyOn(partida, "puntos","get").mockReturnValue(7);
    // Act
    const resultado:string = obtenerMensajeSegunPuntos(puntos);
    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("debería devolver '¡Lo has clavado! ¡Enhorabuena!' cuando puntos son 7.5", () => {
    // Arrange
    const resultadoEsperado:string = "¡Lo has clavado! ¡Enhorabuena!";
    const puntos:number = 7.5;
    vi.spyOn(partida, "puntos","get").mockReturnValue(7.5);
    // Act
    const resultado:string = obtenerMensajeSegunPuntos(puntos);
    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("debería devolver 'Game Over' para cualquier otro valor de puntos", () => {
    // Arrange
    const resultadoEsperado:string = "Game Over";
    const puntos:number = 8;
    vi.spyOn(partida, "puntos","get").mockReturnValue(8);
    // Act
    const resultado:string = obtenerMensajeSegunPuntos(puntos);
    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("generarNumeroAleatorio", ()=>{
  it("Comprobar número mínimo con Math.random configurado a 0", ()=>{
    //Arrange
    const numeroEsperado:number = 1;
    vi.spyOn(global.Math,"random").mockReturnValue(0);
    //Act
    const resultado:number = generarNumeroAleatorio();
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
  it("Comprobar número máximo con Math.random configurado a 0.9", ()=>{
    //Arrange
    const numeroEsperado:number = 10;
    vi.spyOn(global.Math,"random").mockReturnValue(0.9);
    //Act
    const resultado:number = generarNumeroAleatorio();
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
  it("Comprobar número específico con Math.random configurado a 0.4", ()=>{
    //Arrange
    const numeroEsperado:number = 5;
    vi.spyOn(global.Math,"random").mockReturnValue(0.4);
    //Act
    const resultado:number = generarNumeroAleatorio();
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("generarCarta", ()=>{
  it("numero mayor que 7 se le suman dos numeros mas", ()=>{
    //Arrange
    const numeroEsperado:number = 10
    const puntos:number = 8;
    vi.spyOn(partida, "puntos","get").mockReturnValue(8);
    //Act
    const resultado:number = generarCarta(puntos);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("numero menor que 7 muestra el mismo resultado", ()=>{
    //Arrange
    const numeroEsperado:number = 1
    const puntos:number = 1;
    vi.spyOn(partida, "puntos","get").mockReturnValue(1);
    //Act
    const resultado:number = generarCarta(puntos);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("generarValorCarta", ()=>{
  it("Asignar 0.5 a los puntos si el valor de la carta es mayor o igual a 10", ()=>{
    //Arrange
    const numeroEsperado:number = 0.5
    const valorCarta:number = 10;
    vi.spyOn(partida,"puntos","set").mockReturnValue();
    //Act
    const resultado:number = generarValorCarta(valorCarta);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
  it("Asignar el valor de la carta a los puntos si el valor es menor a 10", ()=>{
    //Arrange
    const numeroEsperado:number = 5
    const valorCarta:number = 5;
    vi.spyOn(partida,"puntos","set").mockReturnValue();
    //Act
    const resultado:number= generarValorCarta(valorCarta);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
});
