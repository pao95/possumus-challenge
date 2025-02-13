import { IconButton } from '@mui/material';
import { useContext } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeContextMui } from '../../context/theme/ThemeContext';

export const ToggleTheme = () => {
  const { mode, toggleTheme } = useContext(ThemeContextMui);
  return (
    <IconButton color="primary" onClick={toggleTheme}>
      {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};
