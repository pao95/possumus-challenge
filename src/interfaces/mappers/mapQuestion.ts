import { Question } from '../domain/questionI';
import { ResultQuestion } from '../responses/questionResponseI';

export const mapToQuestionI = (result: ResultQuestion[]): Question[] => {
  return result.map((question) => ({
    type: question.type,
    level: question.difficulty, // Mapea 'difficulty' a 'level'
    topic: question.category, // Mapea 'category' a 'topic'
    question: question.question,
    correct_answer: question.correct_answer,
    answers: [question.correct_answer, ...question.incorrect_answers].sort(
      () => 0.5 - Math.random(),
    ),
  }));
};
