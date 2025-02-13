import { Card, CardContent } from '@mui/material';

interface Props {
  children?: React.ReactElement | React.ReactElement[];
  borderRadius?: string;
}

export const DataCard = ({ children, borderRadius = '30px' }: Props) => {
  return (
    <Card
      sx={{
        borderRadius,
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
};
