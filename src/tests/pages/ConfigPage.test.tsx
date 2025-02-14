import { screen } from '@testing-library/react';
import { ConfigPage } from '../../pages/config/ConfigPage';
import renderWithContext from '../utils/renderWithContext';

describe('ConfigPage Component', () => {
  test('El botón "Start" debe estar deshabilitado al inicio', () => {
    renderWithContext(<ConfigPage />);
    expect(screen.getByRole('button', { name: 'Start' })).toBeDisabled();
  });

  test('Seleccionar solo un nivel no habilita el botón', () => {
    renderWithContext(<ConfigPage />, { config: { level: 'easy' } });
    expect(screen.getByRole('button', { name: 'Start' })).toBeDisabled();
  });

  test('Seleccionar solo una categoria no habilita el botón', () => {
    renderWithContext(<ConfigPage />, { config: { category: '1' } });
    expect(screen.getByRole('button', { name: 'Start' })).toBeDisabled();
  });

  test('Seleccionar una categoría y un nivel habilita el botón', () => {
    renderWithContext(<ConfigPage />, { config: { category: '1', level: 'easy' } });
    expect(screen.getByRole('button', { name: 'Start' })).toBeEnabled();
  });
});
