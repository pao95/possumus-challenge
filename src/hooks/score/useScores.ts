import { useRef } from 'react';

export const useScore = (numberOfQuestions: number) => {
  const points = useRef(0);

  const addPointToScore = () => {
    points.current += 1;
  };

  const handleResetScore = () => {
    points.current = 0;
  };
  return {
    addPointToScore,
    totalScore: (points.current / numberOfQuestions) * 100,
    points: points.current,
    handleResetScore,
  };
};
