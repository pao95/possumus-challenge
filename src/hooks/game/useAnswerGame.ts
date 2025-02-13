import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { GameContext } from '../../context';

export interface AnswerState {
  correct_answer: string;
  selected_answer: string;
}

// Manages the game state
export const useAnswerGame = () => {
  const { dataQuestions, addPointToScore, numberOfQuestions } = useContext(GameContext);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>({
    correct_answer: dataQuestions[currentIndex].correct_answer,
    selected_answer: '',
  });

  const { correct_answer, selected_answer } = answerState;

  const handleNext = () => {
    if (correct_answer === selected_answer) {
      addPointToScore();
    }
    setAnswerState({
      correct_answer: dataQuestions[currentIndex + 1].correct_answer,
      selected_answer: '',
    });

    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataQuestions.length);
  };

  const handleCheckAnswer = (selected_answer: string) => {
    setAnswerState((prev) => ({ ...prev, selected_answer }));

    if (currentIndex + 1 === dataQuestions.length) {
      navigate('/score');
    }
  };

  return {
    currentQuestion: dataQuestions[currentIndex],
    numberQuestion: currentIndex + 1,
    progress: ((currentIndex + 1) / numberOfQuestions) * 100,
    isLastQuestion: currentIndex + 1 === dataQuestions.length,
    handleCheckAnswer,
    answerState,
    handleNext,
  };
};
