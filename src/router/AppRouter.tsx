import { Route, Routes } from 'react-router';
import { ConfigPage } from '../pages/config/ConfigPage';
import { GamePage } from '../pages/game/GamePage';
import { ScorePage } from '../pages/score/ScorePage';

import { SegRouter } from './SegRouter';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ConfigPage />} />
      <Route path="/game-config" element={<ConfigPage />} />
      <Route
        path="/*"
        element={
          <SegRouter>
            <Routes>
              <Route path="/game-questions" element={<GamePage />} />
              <Route path="/score" element={<ScorePage />} />
            </Routes>
          </SegRouter>
        }
      />
    </Routes>
  );
};
