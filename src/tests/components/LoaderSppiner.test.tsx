import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store'; // Asegúrate de importar el store
import { LoaderSppiner } from '../../components/loader/LoaderSppiner';
import { hiddeLoader, showLoader } from '../../store/loaderSlice';

describe('LoaderSppiner Component', () => {
  test('should tender  the loader by default', async () => {
    render(
      <Provider store={store}>
        <LoaderSppiner />
      </Provider>,
    );

    expect(screen.getByTestId('backdrop')).toBeInTheDocument();
    expect(screen.getByTestId('circular-progress')).toBeInTheDocument();
  });

  test('should change style the loader when show changes', async () => {
    render(
      <Provider store={store}>
        <LoaderSppiner />
      </Provider>,
    );

    expect(screen.getByTestId('backdrop')).toHaveStyle('visibility: hidden');

    store.dispatch(showLoader());
    await waitFor(() => {
      expect(screen.getByTestId('backdrop')).toHaveStyle('visibility: visible');
    });

    store.dispatch(hiddeLoader());
    await waitFor(() => {
      expect(screen.getByTestId('backdrop')).toHaveStyle('visibility: hidden');
    });
  });
});
