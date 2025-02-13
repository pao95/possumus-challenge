import { Grid2 as Grid, Typography } from '@mui/material';

import { Logo } from '../../components/logo/Logo';
import { Config } from './container/ConfigContainer';
import { DataCard } from '../../components/card/DataCard';
export const ConfigPage = () => {
  return (
    <Grid container gap={2}>
      <Grid size={12}>
        <Logo size="big" />
      </Grid>

      <Grid size={12}>
        <Typography variant="h4" textAlign={'center'} color="white">
          Let's play!
        </Typography>
      </Grid>

      <Grid size={12}>
        <DataCard>
          <Config />
        </DataCard>
      </Grid>
    </Grid>
  );
};
