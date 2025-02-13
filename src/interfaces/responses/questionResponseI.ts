export interface QuestionResponse {
  response_code: number;
  results: ResultQuestion[];
}

export interface ResultQuestion {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
