import { Grid2 as Grid, Typography } from '@mui/material';
import { ActionButtons } from '../buttons/ActionButtons';
import { Score } from '../score/Score';

export const ScoreContainer = () => {
  return (
    <Grid container gap={5}>
      <Grid size={12}>
        <Typography color="secondary" variant="h5">
          Results
        </Typography>
      </Grid>
      <Grid size={12}>
        <Score />
      </Grid>

      <Grid size={12}>
        <ActionButtons />
      </Grid>
    </Grid>
  );
};
