import { screen } from '@testing-library/react';
import { ConfigPage } from '../../pages/config/ConfigPage';
import renderWithContext from '../utils/renderWithContext';

describe('ConfigPage Component', () => {
  test('The "Start" button should be disabled initially', () => {
    renderWithContext(<ConfigPage />, {});
    expect(screen.getByRole('button', { name: 'Start' })).toBeDisabled();
  });

  test('Selecting only a level does not enable the button', () => {
    renderWithContext(<ConfigPage />, { config: { level: 'easy', category: '' } });
    expect(screen.getByRole('button', { name: 'Start' })).toBeDisabled();
  });

  test('Selecting only a category does not enable the button', () => {
    renderWithContext(<ConfigPage />, { config: { category: '1', level: '' } });
    expect(screen.getByRole('button', { name: 'Start' })).toBeDisabled();
  });

  test('Selecting both a category and a level enables the button', () => {
    renderWithContext(<ConfigPage />, { config: { category: '1', level: 'easy' } });
    expect(screen.getByRole('button', { name: 'Start' })).toBeEnabled();
  });
});
