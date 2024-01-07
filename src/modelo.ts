interface Partida {
    puntos:number;
    mensaje: string;
    carta:number;
    numeroAleatorio:number;
    iniciarPartida():void;
    setPuntos(nuevosPuntos: number): void;
}
export const partida: Partida ={
    puntos: 0,
    mensaje: "",
    carta:0,
    numeroAleatorio: 0,
    iniciarPartida(){},
    setPuntos(nuevosPuntos: number) {
        this.puntos = nuevosPuntos;
    }
}