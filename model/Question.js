export class Question {
    constructor(pregunta, opciones, respuestaOk) {
        this.pregunta = pregunta;
        this.opciones = [opciones];
        this.respuestaOk = respuestaOk;
    }
    respuestaCorrecta(opcion) {
        return opcion === this.respuestaOk;
    }
}