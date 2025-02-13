import { Button, Grid2 as Grid } from '@mui/material';

export const SelectableList = ({
  items,
  onClick,
  getColor,
  disabledClick,
}: {
  items: string[];
  onClick: (item: string) => void;
  getColor: (item: string) => 'primary' | 'success' | 'error' | 'secondary' | 'inherit';
  disabledClick: boolean;
}) => {
  return (
    <Grid container>
      {items.map((item) => (
        <Grid size={12} display={'flex'} justifyContent={'center'} m={1} key={item}>
          <Button
            fullWidth
            sx={{ ml: 1 }}
            color={getColor(item)}
            onClick={() => {
              !disabledClick && onClick(item);
            }}
            variant={'contained'}
          >
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
