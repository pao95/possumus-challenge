import { render } from '@testing-library/react';
import { GameContext, GameContextI } from '../../context';
import { mockGameContext } from './gameContextMock';

const renderWithContext = (ui: React.ReactElement, values: Partial<GameContextI>) => {
  return render(
    <GameContext.Provider value={{ ...mockGameContext, ...values }}>{ui}</GameContext.Provider>,
  );
};

export default renderWithContext;
