import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (todoId: number) => {
      try {
        const response = await fetch(`http://localhost:3004/todos/${todoId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('There is a problem with deleting the todo item!');
        }
      } catch (error) {
        return error || 'Can not delete item from todo list!';
      }
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
export default useDeleteTodo;
