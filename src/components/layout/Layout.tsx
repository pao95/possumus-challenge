import { Container, Grid2 as Grid } from '@mui/material';
import { LoaderSppiner } from '../loader/LoaderSppiner';
import { BackgroundImg } from './BackgroundImg';
import { Header } from './Header';

export interface Props {
  children?: React.ReactElement | React.ReactElement[];
}

export const Layout = ({ children }: Props) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: '100vh',
        paddingY: '10px',
      }}
    >
      <BackgroundImg />
      <LoaderSppiner />
      <Grid
        container
        sx={{
          height: '100%',
        }}
      >
        <Header />
        <Grid size={12}>{children}</Grid>
      </Grid>
    </Container>
  );
};
