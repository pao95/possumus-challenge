import { createContext } from 'react';
import { ThemeContextI } from './themeContextI';

export const ThemeContextMui = createContext({} as ThemeContextI);

export interface Props {
  children?: React.ReactElement | React.ReactElement[];
}
