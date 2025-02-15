import { render, screen, fireEvent } from '@testing-library/react';
import { SelectableList } from '../../components/list/SelectableList';

describe('SelectableList Component', () => {
  test('should render all items correctly', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const mockOnClick = vi.fn();
    const mockGetColor = vi.fn().mockReturnValue('primary');
    const disabledClick = false;

    render(
      <SelectableList
        items={items}
        onClick={mockOnClick}
        getColor={mockGetColor}
        disabledClick={disabledClick}
      />,
    );

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test('should apply the correct color for each item', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const mockOnClick = vi.fn();
    const mockGetColor = vi.fn((item) => {
      return item === 'Item 1' ? 'primary' : 'success';
    });
    const disabledClick = false;

    render(
      <SelectableList
        items={items}
        onClick={mockOnClick}
        getColor={mockGetColor}
        disabledClick={disabledClick}
      />,
    );

    expect(screen.getByText('Item 1')).toHaveClass('MuiButton-colorPrimary');
    expect(screen.getByText('Item 2')).toHaveClass('MuiButton-colorSuccess');
    expect(screen.getByText('Item 3')).toHaveClass('MuiButton-colorSuccess');
  });

  test('should call onClick when an item is clicked', () => {
    const items = ['Item 1', 'Item 2'];
    const mockOnClick = vi.fn();
    const mockGetColor = vi.fn().mockReturnValue('primary');
    const disabledClick = false;

    render(
      <SelectableList
        items={items}
        onClick={mockOnClick}
        getColor={mockGetColor}
        disabledClick={disabledClick}
      />,
    );

    fireEvent.click(screen.getByText('Item 1'));

    expect(mockOnClick).toHaveBeenCalledWith('Item 1');
  });

  test('should not call onClick when disabledClick is true', () => {
    const items = ['Item 1', 'Item 2'];
    const mockOnClick = vi.fn();
    const mockGetColor = vi.fn().mockReturnValue('primary');
    const disabledClick = true;

    render(
      <SelectableList
        items={items}
        onClick={mockOnClick}
        getColor={mockGetColor}
        disabledClick={disabledClick}
      />,
    );

    fireEvent.click(screen.getByText('Item 1'));

    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
