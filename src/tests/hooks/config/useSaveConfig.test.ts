import { renderHook, act } from '@testing-library/react';
import { useSaveConfig } from '../../../hooks/config/useSaveConfig';

describe('useSaveConfig', () => {
  test('should initialize with default config', () => {
    const { result } = renderHook(() => useSaveConfig());

    expect(result.current.config).toEqual({
      category: '',
      level: '',
    });
  });

  test('should update the config using handleChangeConfig', () => {
    const { result } = renderHook(() => useSaveConfig());

    act(() => {
      result.current.handleChangeConfig({ category: 'Science' });
    });

    expect(result.current.config).toEqual({
      category: 'Science',
      level: '',
    });

    act(() => {
      result.current.handleChangeConfig({ level: 'Easy' });
    });

    expect(result.current.config).toEqual({
      category: 'Science',
      level: 'Easy',
    });
  });

  test('should reset the config using handleResetConfig', () => {
    const { result } = renderHook(() => useSaveConfig());

    act(() => {
      result.current.handleChangeConfig({ category: 'History', level: 'Hard' });
    });

    expect(result.current.config).toEqual({
      category: 'History',
      level: 'Hard',
    });

    act(() => {
      result.current.handleResetConfig();
    });

    expect(result.current.config).toEqual({
      category: '',
      level: '',
    });
  });

  test('should merge the new config with the existing one', () => {
    const { result } = renderHook(() => useSaveConfig());

    act(() => {
      result.current.handleChangeConfig({ category: 'Math' });
    });

    expect(result.current.config).toEqual({
      category: 'Math',
      level: '',
    });

    act(() => {
      result.current.handleChangeConfig({ level: 'Medium' });
    });

    expect(result.current.config).toEqual({
      category: 'Math',
      level: 'Medium',
    });
  });
});
