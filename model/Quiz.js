import { Question } from "./Question.js";

export class Quiz {
    questionIndex = 0
    score = 0
    constructor(questions) {
        this.questions = questions
    }
    getQuestionIndex() {
        return this.questions[this.questionIndex]

    }
    isEnded() {
        return this.questions.length === this.questionIndex
    }
    guess(respuesta) {
        if (this.getQuestionIndex().respuestaOk(respuesta)) {
            this.score++
        }

        this.questionIndex++
    }

}