import { Grid2 as Grid } from '@mui/material';
import { ScoreContainer } from './container/ScoreContainer';

export const ScorePage = () => {
  return (
    <Grid container gap={5}>
      <Grid size={12}>
        <ScoreContainer />
      </Grid>
    </Grid>
  );
};
