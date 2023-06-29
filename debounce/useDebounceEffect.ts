import { useEffect, DependencyList } from 'react';

export const useDebounceEffect = (
  fn: () => void,
  waitTime: number,
  deps: DependencyList,
) => {
  useEffect(() => {
    const t = setTimeout(() => {
      // eslint-disable-next-line
      fn.apply(undefined);
    }, waitTime);

    return () => {
      clearTimeout(t);
    };
    // eslint-disable-next-line
  }, deps);
};
