import { MutableRefObject, useEffect, useRef } from 'react';
import { AnyFunction } from '@/shared/types/common';

interface UseInfiniteScrollProps<Element extends HTMLElement> {
  callback?: AnyFunction;
  wrapperRef?: MutableRefObject<Element>;
  triggerRef: MutableRefObject<Element>;
}

export const useInfiniteScroll = <Element extends HTMLElement>({
  callback,
  wrapperRef,
  triggerRef,
}: UseInfiniteScrollProps<Element>) => {
  const observer = useRef<IntersectionObserver | null >(null);
  useEffect(() => {
    if (callback) {
      const observerCallback: IntersectionObserverCallback = ([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      };
      const options = {
        root: wrapperRef?.current || null,
        rootMargin: '0px',
        threshold: 1.0,
      };
      observer.current = new IntersectionObserver(observerCallback, options);
      observer.current.observe(triggerRef.current);
    }

    return () => {
      if (observer.current && triggerRef.current) {
        // eslint-disable-next-line
        observer.current.unobserve(triggerRef.current);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
