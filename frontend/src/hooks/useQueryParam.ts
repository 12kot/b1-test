import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useQueryParam = <T>(paramKey: string): [T | undefined, (value?: T) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [paramValue, setParamValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    const param = searchParams.get(paramKey);
    if (!param) return setParamValue(undefined);

    try {
      setParamValue(JSON.parse(param) as T);
    } catch {
      setParamValue(param as unknown as T);
    }
  }, [paramKey, searchParams]);

  const setQueryParam = useCallback(
    (value?: T) => {
      setParamValue(value);

      const updatedParams = new URLSearchParams(searchParams);

      if (!value) {
        updatedParams.delete(paramKey);
      } else if (typeof value === 'string') {
        updatedParams.set(paramKey, value);
      } else {
        updatedParams.set(paramKey, JSON.stringify(value));
      }

      setSearchParams(updatedParams);
    },
    [paramKey, searchParams, setSearchParams],
  );

  return [paramValue, setQueryParam];
};
