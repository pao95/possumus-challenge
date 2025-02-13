import { Category } from '../../interfaces/domain/categoryI';
import { Question } from '../../interfaces/domain/questionI';

export interface PropsGameContext {
  children?: React.ReactElement | React.ReactElement[];
}

export interface DinamicConfig {
  category: string;
  level: string;
}
export interface Config {
  category: string;
  level: string;
  size: string;
  type: string;
}

export interface GameContextI {
  handleChangeConfig: (data: Partial<DinamicConfig>) => void;
  getDataCategories: (data: DinamicConfig) => void;
  handleRestartGame: () => void;
  addPointToScore: () => void;
  handleResetAll: () => void;
  dataQuestions: Question[];
  dataCategories: Category[];
  config: DinamicConfig;
  gameStarted: boolean;
  numberOfQuestions: number;
  totalScore: number;
  points: number;
}
