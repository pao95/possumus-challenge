import { useContext } from 'react';
import { Navigate } from 'react-router';
import { GameContext } from '../context';
interface Props {
  children?: React.ReactElement | React.ReactElement[];
}
export const SegRouter = ({ children }: Props) => {
  const { gameStarted } = useContext(GameContext);

  return gameStarted ? children : <Navigate to="/" />;
};
