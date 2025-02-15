import { Backdrop, CircularProgress } from '@mui/material';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export const LoaderSppiner = () => {
  const show = useSelector((state: RootState) => state.loader.show);

  return (
    <Backdrop
      data-testid="backdrop"
      sx={(theme) => ({ color: theme.palette.secondary.main })}
      open={show}
    >
      <CircularProgress color="inherit" data-testid="circular-progress" />
    </Backdrop>
  );
};
