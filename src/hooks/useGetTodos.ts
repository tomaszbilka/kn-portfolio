import { useQuery } from '@tanstack/react-query';

const useGetTodos = () =>
  useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      try {
        const response = await fetch('http://localhost:3004/todos');
        if (!response.ok) {
          throw new Error('Can not fetch todos!');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        return error || 'Sth went wrong!';
      }
    },
  });

export default useGetTodos;
