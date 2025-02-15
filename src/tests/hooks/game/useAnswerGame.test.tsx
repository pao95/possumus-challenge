import { renderHook, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router'; // Importa MemoryRouter
import { GameContext } from '../../../context';
import { useAnswerGame } from '../../../hooks/game/useAnswerGame';
import { mockGameContext } from '../../utils/gameContextMock';

describe('useAnswerGame', () => {
  const mockDataQuestions = [
    { question: 'Question 1', correct_answer: 'A' },
    { question: 'Question 2', correct_answer: 'B' },
  ];
  const mockNumberOfQuestions = mockDataQuestions.length;

  test('should initialize with the first question and default state', () => {
    const { result } = renderHook(() => useAnswerGame(), {
      wrapper: ({ children }) => (
        <MemoryRouter>
          <MockGameContext
            dataQuestions={mockDataQuestions}
            numberOfQuestions={mockNumberOfQuestions}
          >
            {children}
          </MockGameContext>
        </MemoryRouter>
      ),
    });

    expect(result.current.currentQuestion).toEqual(mockDataQuestions[0]);
    expect(result.current.numberQuestion).toBe(1);
    expect(result.current.progress).toBe((1 / mockNumberOfQuestions) * 100);
    expect(result.current.isLastQuestion).toBe(false);
    expect(result.current.answerState).toEqual({
      correct_answer: 'A',
      selected_answer: '',
    });
  });

  test('should update selected_answer when handleCheckAnswer is called', () => {
    const { result } = renderHook(() => useAnswerGame(), {
      wrapper: ({ children }) => (
        <MemoryRouter>
          <MockGameContext
            dataQuestions={mockDataQuestions}
            numberOfQuestions={mockNumberOfQuestions}
          >
            {children}
          </MockGameContext>
        </MemoryRouter>
      ),
    });

    act(() => {
      result.current.handleCheckAnswer('B');
    });

    expect(result.current.answerState.selected_answer).toBe('B');
  });

  test('should move to the next question and update state when handleNext is called', () => {
    const { result } = renderHook(() => useAnswerGame(), {
      wrapper: ({ children }) => (
        <MemoryRouter>
          <MockGameContext
            dataQuestions={mockDataQuestions}
            numberOfQuestions={mockNumberOfQuestions}
          >
            {children}
          </MockGameContext>
        </MemoryRouter>
      ),
    });

    act(() => {
      result.current.handleCheckAnswer('A');
    });

    act(() => {
      result.current.handleNext();
    });

    expect(result.current.currentQuestion).toEqual(mockDataQuestions[1]);
    expect(result.current.numberQuestion).toBe(2);
    expect(result.current.progress).toBe((2 / mockNumberOfQuestions) * 100);
    expect(result.current.isLastQuestion).toBe(true);
    expect(result.current.answerState).toEqual({
      correct_answer: 'B',
      selected_answer: '',
    });
  });
});

// Mock  GameContext
const MockGameContext = ({
  children,
  dataQuestions,
  numberOfQuestions,
}: {
  children: React.ReactNode;
  dataQuestions: any;
  numberOfQuestions: number;
}) => {
  return (
    <GameContext.Provider value={{ ...mockGameContext, dataQuestions, numberOfQuestions }}>
      {children}
    </GameContext.Provider>
  );
};
