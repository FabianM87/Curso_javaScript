export class UI {
    constructor() {}
    showQuestion(pregunta) {
        const questionTitle = document.getElementById("question")
        questionTitle.innerText = pregunta

    }

    showChoices(choices) {
        const choicesContainer = document.getElementById("choices");

        for (let i = 0; i < choices.length; i++) {

            const button = document.createElement("button");
            button.innerText = choices[i];
            button.className = 'button'
            button.addEventListener('click', () => alert("aca dice si es correcto o no"))
            choicesContainer.append(button);
        }
    }
}