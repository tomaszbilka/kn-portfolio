import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (todoId: number) => {
      await fetch(`http://localhost:3004/todos/${todoId}`, {
        method: 'DELETE',
      });
    },
    onSettled() {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
export default useDeleteTodo;
