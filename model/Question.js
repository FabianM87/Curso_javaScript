export class Question {
    constructor(pregunta, choices, respuestaOk) {
        this.pregunta = pregunta;
        this.choices = [choices];
        this.respuestaOk = respuestaOk;
    }
    respuestaCorrecta(opcion) {
        return opcion === this.respuestaOk;
    }
}