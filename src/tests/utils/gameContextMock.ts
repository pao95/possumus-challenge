// Funciones mockeadas
export const mockHandleChangeConfig = vi.fn();
export const mockHandleRestartGame = vi.fn();

// Datos mockeados
export const mockDataCategories = [
  { id: 1, name: 'Science' },
  { id: 2, name: 'History' },
];

export const mockDataQuestions = [
  {
    type: 'multiple',
    level: 'medium',
    topic: 'Entertainment: Books',
    question:
      "By what nickname is Jack Dawkins known in the Charles Dickens novel, 'Oliver Twist'?",
    correct_answer: 'The Artful Dodger',
    answers: ['The Artful Dodger', 'Fagin', 'Bull’s-eye', 'Mr. Fang'],
  },
  {
    type: 'multiple',
    level: 'medium',
    topic: 'Entertainment: Books',
    question: 'What book series published by Jim Butcher follows a wizard in modern day Chicago?',
    correct_answer: 'The Dresden Files',
    answers: [
      'The Dresden Files',
      'A Hat in Time',
      'The Cinder Spires',
      'My Life as a Teenage Wizard',
    ],
  },
];
// Función para proporcionar el contexto mockeado
export const mockGameContext = {
  handleChangeConfig: mockHandleChangeConfig,
  handleRestartGame: mockHandleRestartGame,
  dataCategories: mockDataCategories,
  config: { category: '', level: '' },
  getDataCategories: vi.fn(),
  dataQuestions: [],
  numberOfQuestions: 5,
  totalScore: 0,
  points: 0,
  addPointToScore: vi.fn(),
  handleResetAll: vi.fn(),
  gameStarted: false,
};
