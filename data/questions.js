import { Question } from '../model/Question.js';
import { data } from '../data/data.js';
export const questions = data.map(question => new Question(question.pregunta, question.choices, question.respuestaOk))