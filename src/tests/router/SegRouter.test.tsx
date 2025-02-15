import { screen } from '@testing-library/react';
import renderWithContext from '../utils/renderWithContext';
import { MemoryRouter } from 'react-router';
import { AppRouter } from '../../router/AppRouter';

describe('Redirect when gameStarted is false', () => {
  test('Redirects to ConfigPage and displays the Start button', () => {
    renderWithContext(
      <MemoryRouter initialEntries={['/game-questions']}>
        <AppRouter />
      </MemoryRouter>,
      { gameStarted: false },
    );

    expect(screen.getByRole('button', { name: 'Start' })).toBeInTheDocument();
  });

  test('Redirects to ConfigPage and displays the Start button', () => {
    renderWithContext(
      <MemoryRouter initialEntries={['/score']}>
        <AppRouter />
      </MemoryRouter>,
      { gameStarted: false },
    );

    expect(screen.getByRole('button', { name: 'Start' })).toBeInTheDocument();
  });
});
