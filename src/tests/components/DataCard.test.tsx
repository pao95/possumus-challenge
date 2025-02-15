import { render, screen } from '@testing-library/react';
import { DataCard } from '../../components/card/DataCard';

describe('DataCard Component', () => {
  test('should render children correctly', () => {
    render(
      <DataCard>
        <div>Test Child</div>
      </DataCard>,
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  test('should apply the default borderRadius', () => {
    const { container } = render(
      <DataCard>
        <div>Test Child</div>
      </DataCard>,
    );

    const card = container.querySelector('.MuiCard-root');
    expect(card).toHaveStyle('border-radius: 30px');
  });

  test('should apply custom borderRadius', () => {
    const { container } = render(
      <DataCard borderRadius="15px">
        <div>Test Child</div>
      </DataCard>,
    );

    const card = container.querySelector('.MuiCard-root');
    expect(card).toHaveStyle('border-radius: 15px');
  });
});
