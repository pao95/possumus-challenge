import { useCallback, useState } from 'react';
import { DinamicConfig } from '../../context';

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
