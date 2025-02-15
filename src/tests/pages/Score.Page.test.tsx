import { fireEvent, render, screen } from '@testing-library/react';
import { GameContext } from '../../context';
import { mockGameContext } from '../utils/gameContextMock';
import { ScorePage } from '../../pages/score/ScorePage';
import { MemoryRouter } from 'react-router';

const renderWithContext = (values: Partial<typeof mockGameContext>) => {
  return render(
    <MemoryRouter>
      <GameContext.Provider value={{ ...mockGameContext, ...values }}>
        <ScorePage />
      </GameContext.Provider>
    </MemoryRouter>,
  );
};

describe('Score Component', () => {
  it('should display the correct number of correct answers and total questions', () => {
    renderWithContext({
      points: 3,
      numberOfQuestions: 5,
    });

    expect(screen.getByText('Total correct answers')).toBeInTheDocument();
    expect(screen.getByText('3 out of 5 questions')).toBeInTheDocument();
    expect(screen.getByText('Your final score is')).toBeInTheDocument();
  });

  it('should display the final score in a circle', () => {
    renderWithContext({
      totalScore: 85,
    });

    const circle = screen.getByText('85');
    expect(circle).toBeInTheDocument();
    expect(circle).toHaveClass('circle');
  });
});

describe('ActionButtons Component', () => {
  it('should render both buttons and handle restart correctly', () => {
    const mockHandleRestartGame = vi.fn();

    renderWithContext({
      handleRestartGame: mockHandleRestartGame,
    });

    expect(screen.getByText('Restart')).toBeInTheDocument();
    expect(screen.getByText('Skip')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Restart'));

    expect(mockHandleRestartGame).toHaveBeenCalled();
  });
});
