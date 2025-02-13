import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { useScore } from '../../hooks/score/useScores';
import { GameContext } from './GameContext';
import { PropsGameContext } from './gameContextI';
import { useDataCategories } from '../../hooks/config/useDataCategories';
import { useDataQuestions } from '../../hooks/config/useDataQuestions';
import { useSaveConfig } from '../../hooks/config/useSaveConfig';

const staticConfig = {
  size: '5',
  type: 'multiple',
};
const numberOfQuestions = parseInt(staticConfig.size);

export const GameProvider = ({ children }: PropsGameContext) => {
  const gameStarted = useRef(false);
  const { getDataCategories, dataCategories } = useDataCategories();
  const { dataQuestions, getDataQuestion, handleResetQuestions } = useDataQuestions();
  const { config, handleChangeConfig, handleResetConfig } = useSaveConfig();
  const { addPointToScore, totalScore, points, handleResetScore } = useScore(numberOfQuestions);
  const navigate = useNavigate();

  const handleRestartGame = async () => {
    await getDataQuestion({ ...staticConfig, ...config });
    navigate('/game-questions');
    handleResetScore();
    gameStarted.current = true;
  };

  const handleResetAll = () => {
    gameStarted.current = false;
    handleResetScore();
    handleResetQuestions();
    handleResetConfig();
  };

  return (
    <GameContext.Provider
      value={{
        handleChangeConfig,
        getDataCategories,
        dataCategories,
        config,
        handleRestartGame,
        dataQuestions,
        addPointToScore,
        numberOfQuestions,
        totalScore,
        points,
        handleResetAll,
        gameStarted: gameStarted.current,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
