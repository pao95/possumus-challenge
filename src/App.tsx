import { BrowserRouter } from 'react-router';
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ThemeProviderMui } from './context/theme/ThemeProvider';
import { GameProvider } from './context';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProviderMui>
          <GameProvider>
            <AppRouter />
          </GameProvider>
        </ThemeProviderMui>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
