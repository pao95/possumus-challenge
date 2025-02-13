import { Button, Grid2 as Grid } from '@mui/material';
import Level from '../levels/Level';
import { useContext } from 'react';
import Categories from '../categories/Categories';
import { GameContext } from '../../../context';
export const Config = () => {
  const { config, handleChangeConfig, dataCategories, handleRestartGame } = useContext(GameContext);

  return (
    <Grid container gap={5} padding={1}>
      <Grid size={12}>
        <Categories handleChange={handleChangeConfig} dataCategories={dataCategories} />
      </Grid>

      <Grid size={12}>
        <Level handleChange={handleChangeConfig} value={config.level} />
      </Grid>

      <Grid size={12} display={'flex'} justifyContent={'center'}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRestartGame}
          disabled={!Boolean(config.category) || !Boolean(config.level)}
        >
          Start
        </Button>
      </Grid>
    </Grid>
  );
};
