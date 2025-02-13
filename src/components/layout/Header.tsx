import { Grid2 as Grid } from '@mui/material';
import { useLocation } from 'react-router';
import { ToggleTheme } from '../toggleTheme/ToggleTheme';
import { Logo } from '../logo/Logo';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Grid
        size={6}
        display={'flex'}
        justifyContent={'initial'}
        sx={{
          height: 'fit-content',
        }}
      >
        {pathname !== '/' && <Logo size="small" />}
      </Grid>
      <Grid
        size={6}
        display={'flex'}
        justifyContent={'end'}
        sx={{
          height: 'fit-content',
        }}
      >
        <ToggleTheme />
      </Grid>
    </>
  );
};
