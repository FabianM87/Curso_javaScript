import { questions } from "./data/questions.js";
import { Quiz } from "./model/Quiz.js";
import { UI } from "./model/UI.js";

function main() {
    const quiz = new Quiz(questions);
    const ui = new UI()
    ui.showQuestion(quiz.getQuestionIndex().pregunta);

    ui.showChoices(quiz.getQuestionIndex().choices);
}
main();