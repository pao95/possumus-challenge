import { useTheme } from '@mui/material';

const images = [
  { right: '0', top: '0' },
  { left: '40vw', top: '30vh' },
  { left: '10vw', top: '10vh' },
  { right: '8vw', top: '30vh' },
  { left: '12vw', bottom: '5vh' },
  { right: '12vw', bottom: '0' },
];

export const BackgroundImg = () => {
  const theme = useTheme();
  return (
    <>
      {images.map((style, index) => (
        <img
          key={index}
          src={
            theme.palette.mode === 'dark'
              ? '../../public/game-svg-dark.svg'
              : '../../public/game-svg-light.svg'
          }
          style={{
            position: 'absolute',
            width: '15vw',
            height: '15vw',
            maxWidth: '300px',
            maxHeight: '300px',
            zIndex: '-10',
            ...style,
          }}
        />
      ))}
    </>
  );
};
