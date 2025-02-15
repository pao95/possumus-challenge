import { useCallback, useState } from 'react';
import { DinamicConfig } from '../../context';

// Manages the initial config of the game
export const useSaveConfig = () => {
  const [config, setConfig] = useState<DinamicConfig>({
    category: '',
    level: '',
  });

  const handleChangeConfig = useCallback((config: Partial<DinamicConfig>) => {
    setConfig((prev) => ({ ...prev, ...config }));
  }, []);

  const handleResetConfig = () => {
    setConfig({
      category: '',
      level: '',
    });
  };

  return { config, handleChangeConfig, handleResetConfig };
};
