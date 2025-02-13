import { questions } from './trivia/questions';
import { categories } from './trivia/categories';

export const apiTrivia = {
  ...questions,
  ...categories,
};
