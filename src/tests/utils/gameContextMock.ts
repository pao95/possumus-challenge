// Funciones mockeadas
export const mockHandleChangeConfig = vi.fn();
export const mockHandleRestartGame = vi.fn();

// Datos mockeados
export const mockDataCategories = [
  { id: 1, name: 'Science' },
  { id: 2, name: 'History' },
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
