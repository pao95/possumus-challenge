import { Button, Grid2 as Grid } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { GameContext } from '../../../context';
export const ActionButtons = () => {
  const { handleRestartGame, handleResetAll } = useContext(GameContext);
  const navigate = useNavigate();

  return (
    <Grid container gap={2} justifyContent={'center'}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<ReplayIcon />}
          onClick={handleRestartGame}
        >
          Restart
        </Button>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<HomeIcon />}
          onClick={() => {
            navigate('/');
            handleResetAll();
          }}
        >
          Skip
        </Button>
      </Grid>
    </Grid>
  );
};
