import { Box, useTheme } from '@mui/material';

import SmartToyIcon from '@mui/icons-material/SmartToy';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

interface Props {
  size: 'small' | 'big';
}

export const Logo = ({ size = 'small' }: Props) => {
  const theme = useTheme();

  return (
    <Box
      color={theme.palette.secondary.main}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <QuestionMarkIcon
        style={{
          marginLeft: size === 'big' ? '80px' : '30px',
          fontSize: size === 'big' ? '30px' : '15px',
          transform: 'rotate(20deg)',
        }}
      />
      <SmartToyIcon style={{ fontSize: size === 'big' ? '100px' : '20px' }} />
    </Box>
  );
};
