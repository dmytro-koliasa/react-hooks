import { useCallback, useState } from 'react';

type UseToggle = (initialState:boolean) => [boolean, () => void];

export const useToggle:UseToggle = (initialState:boolean = false) => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return [state, toggle];
};
