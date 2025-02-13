import { Button, Grid2 as Grid } from '@mui/material';
import { Progress } from '../progress/Progress';
import { QuestionCard } from '../question/QuestionCard';
import { Answers } from '../answers/Answers';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { DataCard } from '../../../components/card/DataCard';
import { useAnswerGame } from '../../../hooks/game/useAnswerGame';

export const GameContainer = () => {
  const {
    currentQuestion,
    numberQuestion,
    handleCheckAnswer,
    answerState,
    handleNext,
    progress,
    isLastQuestion,
  } = useAnswerGame();
  return (
    <Grid container gap={5} display={'flex'} justifyContent={'end'}>
      <Grid size={12}>
        <Progress value={progress} />
      </Grid>

      <Grid size={12}>
        <QuestionCard numberQuestion={numberQuestion} currentQuestion={currentQuestion} />
      </Grid>

      <Grid size={12}>
        <DataCard>
          <Answers
            answerState={answerState}
            currentQuestion={currentQuestion}
            handleCheckAnswer={handleCheckAnswer}
          />
        </DataCard>
      </Grid>

      {!isLastQuestion && (
        <Grid size={{ xs: 12, sm: 2 }}>
          <Button
            variant="contained"
            onClick={handleNext}
            endIcon={<ArrowForwardIcon />}
            disabled={!Boolean(answerState.selected_answer)}
            color="primary"
            fullWidth
          >
            Next
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
