import { Grid2 as Grid, Typography } from '@mui/material';
import './score.css';
import { useContext } from 'react';
import { GameContext } from '../../../context';

export const Score = () => {
  const { numberOfQuestions, points, totalScore } = useContext(GameContext);
  return (
    <Grid container gap={5}>
      <Grid size={12}>
        <Typography color="white">Total correct answers</Typography>
        <Typography color="secondary">
          {points} out of {numberOfQuestions} questions
        </Typography>
      </Grid>
      <Grid size={12}>
        <Grid container gap={2}>
          <Grid size={12}>
            <Typography variant="h5" textAlign={'center'} color="white">
              Your final score is
            </Typography>
          </Grid>
          <Grid size={12} display={'flex'} justifyContent={'center'} color="white">
            <div className="circle">{totalScore}</div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
