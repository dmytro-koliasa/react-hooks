import { AnyFunction } from '@/shared/types/common';
import { useEffect } from 'react';

export const useOnKeyPress = (key: string, callback: AnyFunction) => {
  useEffect(() => {
    const keyPressHandler = (event:KeyboardEvent) => {
      if (event.key === key) {
        callback();
      }
    };
    window.addEventListener('keydown', keyPressHandler);

    return () => window.removeEventListener('keydown', keyPressHandler);
  }, [key, callback]);
};
