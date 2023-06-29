import { useCallback } from 'react';
import * as QueryString from 'querystring';
import { useRouter } from 'next/router';

type UseUrlUpdateResult = { updateUrl: (value: any) => void };

export const useUrlUpdate = (queryKey: string): UseUrlUpdateResult => {
  const {
    replace,
    query,

    pathname,
  } = useRouter();
  const updateUrl = useCallback((value: any) => {
    const newQuery = {
      ...query,
      [queryKey]: value,
    };
    if (queryKey !== 'page' || (queryKey === 'page' && value === 1)) {
      delete newQuery.page;
    }
    const queryString = QueryString
      .stringify(newQuery)
      .replace(/%5B/g, '[')
      .replace(/%5D/g, ']');
    const newUrl = {
      pathname,
      query: queryString,
    };
    const getAsPath = () => {
      const restQuery = newUrl.query.split('&').filter((segment) => segment.includes('filters['));
      return { ...newUrl, query: restQuery.join('&') };
    };
    const asNewUrl = getAsPath();
    replace(newUrl, undefined, {
      scroll: false,
      shallow: true,
    });
  }, [pathname, query, queryKey, replace]);

  return { updateUrl };
};
