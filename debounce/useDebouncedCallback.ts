import { useCallback, useRef } from 'react';

export const useDebouncedCallback = (callback: (...args: any[]) => any, delay: number = 400) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();
  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
};
