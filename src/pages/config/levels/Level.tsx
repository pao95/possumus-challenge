import { Grid2 as Grid, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { memo } from 'react';
import { DinamicConfig } from '../../../context';

interface Props {
  handleChange: (config: Partial<DinamicConfig>) => void;
  value: string;
}

const Level = ({ handleChange, value }: Props) => {
  return (
    <Grid container gap={2}>
      <Grid size={12}>
        <Typography color="primary">* Choose your level:</Typography>
      </Grid>
      <Grid size={12}>
        <ToggleButtonGroup
          color="secondary"
          value={value}
          exclusive
          onChange={(_e, value) => {
            handleChange({ level: value });
          }}
          aria-label="Platform"
          fullWidth
        >
          <ToggleButton value="easy">Easy</ToggleButton>
          <ToggleButton value="medium">Medium</ToggleButton>
          <ToggleButton value="hard">Hard</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};

export default memo(Level);
