import { useEffect } from 'react';

type UseBodyOverflowOptions = {
  condition: boolean;
  lockClassName?: boolean
}

export const useBodyOverflow = ({ lockClassName = false, condition }: UseBodyOverflowOptions) => {
  useEffect(() => {
    if (condition) {
      if (lockClassName) {
        document.body.classList.add('_lock');
      } else {
        document.body.style.overflow = 'hidden';
      }
    } else if (lockClassName) {
      document.body.classList.remove('_lock');
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [condition, lockClassName]);
};

// class ._lock has !important flag for 'overflow: hidden' property.
