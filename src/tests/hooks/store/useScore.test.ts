import { renderHook, act } from '@testing-library/react';
import { useScore } from '../../../hooks/score/useScores';

describe('useScore', () => {
  test('should initialize with zero points', () => {
    const { result } = renderHook(() => useScore(10));

    expect(result.current.points).toBe(0);
    expect(result.current.totalScore).toBe(0);
  });

  test('should add a point to the score', () => {
    const { result } = renderHook(() => useScore(10));

    act(() => {
      result.current.addPointToScore();
    });

    expect(result.current.points).toBe(1);
    expect(result.current.totalScore).toBe(10);
  });

  test('should reset the score to zero', () => {
    const { result } = renderHook(() => useScore(10));

    act(() => {
      result.current.addPointToScore();
    });

    expect(result.current.points).toBe(1);

    act(() => {
      result.current.handleResetScore();
    });

    expect(result.current.points).toBe(0);
    expect(result.current.totalScore).toBe(0);
  });

  test('should calculate the total score correctly', () => {
    const { result } = renderHook(() => useScore(5));

    act(() => {
      result.current.addPointToScore();
      result.current.addPointToScore();
    });

    expect(result.current.points).toBe(2);
    expect(result.current.totalScore).toBe(40);
  });
});
