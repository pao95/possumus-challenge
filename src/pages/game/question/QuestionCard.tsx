import { Card, CardContent, Grid2 as Grid, Typography, useTheme } from '@mui/material';
import { Question } from '../../../interfaces';

interface QuestionCardProps {
  numberQuestion: number;
  currentQuestion: Question;
}

export const QuestionCard = ({ numberQuestion, currentQuestion }: QuestionCardProps) => {
  const theme = useTheme();
  return (
    <Grid container gap={2}>
      <Grid size={12}>
        <Typography color="secondary">Question {numberQuestion} :</Typography>

        <Card sx={{ backgroundColor: theme.palette.primary.main, color: '#fff' }}>
          <CardContent>
            <Typography variant="body1" textAlign={'center'}>
              {currentQuestion.question}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
