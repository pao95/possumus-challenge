import { useState } from 'react';

// Manages the score of the game
export const useScore = (numberOfQuestions: number) => {
  const [points, setPoints] = useState(0);

  const addPointToScore = () => {
    setPoints((prevPoints) => prevPoints + 1);
  };

  const handleResetScore = () => {
    setPoints(0);
  };

  return {
    addPointToScore,
    totalScore: (points / numberOfQuestions) * 100,
    points,
    handleResetScore,
  };
};
