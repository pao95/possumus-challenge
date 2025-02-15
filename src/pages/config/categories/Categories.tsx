import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { memo } from 'react';
import { Grid2 as Grid, Typography } from '@mui/material';
import { Category } from '../../../interfaces';
import { DinamicConfig } from '../../../context';

interface Props {
  handleChange: (config: Partial<DinamicConfig>) => void;
  dataCategories: Category[];
}

const Categories = ({ handleChange, dataCategories }: Props) => {
  return (
    <Grid container gap={2}>
      <Grid size={12}>
        <Typography color="primary">* Select a topic: </Typography>
      </Grid>
      <Grid size={12}>
        <Autocomplete
          color="secondary"
          options={dataCategories}
          getOptionLabel={(option) => option.name}
          onChange={(_event, value) => {
            handleChange({ category: value?.id.toString() });
          }}
          fullWidth
          disablePortal
          slotProps={{
            listbox: {
              style: {
                maxHeight: 150,
              },
            },
          }}
          renderInput={(params) => <TextField {...params} label="Topic" color="secondary" />}
        />
      </Grid>
    </Grid>
  );
};

export default memo(Categories);
