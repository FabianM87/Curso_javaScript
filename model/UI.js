export class UI {
    constructor() {}
    showQuestion(pregunta) {
        const questionTitle = document.getElementById("question")
        questionTitle.innerText = pregunta

    }

    viewOpciones(choices) {
        const choicesContainer = document.getElementById("choices");

        for (let i = 0; i < choices.lenght; i++) {

            const button = document.createElement("button");
            button.innerText = choices[i];
            choicesContainer.append(button);
        }
    }
}