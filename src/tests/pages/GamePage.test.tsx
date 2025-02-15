import renderWithContext from '../utils/renderWithContext';
import { GamePage } from '../../pages/game/GamePage';
import { mockDataQuestions } from '../utils/gameContextMock';
import { BrowserRouter } from 'react-router';
import { screen } from '@testing-library/react';

describe('GamePage Component', () => {
  test('Should display question 1 and its answers on the screen', async () => {
    renderWithContext(
      <BrowserRouter>
        <GamePage />
      </BrowserRouter>,
      { dataQuestions: mockDataQuestions },
    );

    mockDataQuestions[0].answers.forEach((answer) => {
      expect(screen.getByRole('button', { name: answer })).toBeInTheDocument();
    });
    expect(screen.getByText(mockDataQuestions[0].question)).toBeInTheDocument();
  });
});
