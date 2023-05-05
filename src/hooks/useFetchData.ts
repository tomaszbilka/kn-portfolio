import { useState, useCallback } from 'react';

type TuseFetchData = [
  sendRequest: (queryUrl: string, query?: string) => void,
  data: string | null,
  isLoading: boolean,
  error: string | null,
];

const useFetchData = (): TuseFetchData => {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = useCallback(async (queryUrl, query) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${queryUrl}${query}`);
      if (!response.ok) {
        throw new Error('Cant fetch image!');
      }
      setData(response.url);
      setIsLoading(false);
    } catch {
      setError('Sth went wrong!');
      setIsLoading(false);
    }
  }, []);

  return [sendRequest, data, isLoading, error];
};

export default useFetchData;
