import { useQuery } from '@tanstack/react-query';

const useGetTodos = () =>
  useQuery({
    queryKey: ['todos'],
    queryFn: async ({ signal }) => {
      const response = await fetch('http://localhost:3004/todos', { signal });
      const data = await response.json();
      return data.reverse();
    },
  });

export default useGetTodos;
