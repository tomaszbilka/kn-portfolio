import { useMutation, useQueryClient } from '@tanstack/react-query';

const useAddNewTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newTodo: { title: string }) => {
      try {
        const response = await fetch('http://localhost:3004/todos', {
          body: JSON.stringify(newTodo),
          headers: {
            'Content-type': 'application/json',
          },
          method: 'POST',
        });
        if (!response.ok) {
          throw new Error('There is a problem with sending new todo!');
        }
      } catch (error) {
        return error || 'Can not update todo list!';
      }
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
export default useAddNewTodo;
