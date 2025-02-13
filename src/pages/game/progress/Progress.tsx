import { LinearProgress } from '@mui/material';

interface ProgressProps {
  value: number;
}
export const Progress = ({ value }: ProgressProps) => {
  return <LinearProgress variant="determinate" value={value} color="secondary" />;
};
