import { Grid2 as Grid } from '@mui/material';
import { GameContainer } from './container/GameContainer';

export const GamePage = () => {
  return (
    <Grid container gap={5}>
      <Grid size={12}>
        <GameContainer />
      </Grid>
    </Grid>
  );
};
