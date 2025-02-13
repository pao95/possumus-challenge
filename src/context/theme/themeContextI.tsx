export type ThemeMode = 'light' | 'dark';

export interface ThemeContextI {
  toggleTheme: () => void;
  mode: ThemeMode;
}

export interface PropsThemeContext {
  children?: React.ReactElement | React.ReactElement[];
}
