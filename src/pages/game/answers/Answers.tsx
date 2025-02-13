import { Grid2 as Grid, Typography } from '@mui/material';
import { SelectableList } from '../../../components/list/SelectableList';
import { AnswerState } from '../../../hooks/game/useAnswerGame';
import { Question } from '../../../interfaces';

interface AnswersProps {
  currentQuestion: Question;
  answerState: AnswerState;
  handleCheckAnswer: (selectedAnswer: string) => void;
}
export const Answers = ({ currentQuestion, answerState, handleCheckAnswer }: AnswersProps) => {
  const { correct_answer, selected_answer } = answerState;
  return (
    <Grid container>
      <Grid size={12}>
        <Typography color="primary">Choose the correct answer:</Typography>
      </Grid>
      <Grid size={12}>
        <SelectableList
          items={currentQuestion.answers}
          getColor={(answer) => {
            if (!selected_answer) return 'inherit';
            if (answer === correct_answer) return 'success';
            if (answer === selected_answer) return 'error';
            return 'inherit';
          }}
          onClick={handleCheckAnswer}
          disabledClick={Boolean(selected_answer)}
        />
      </Grid>
    </Grid>
  );
};
