import { useMutation, useQueryClient } from '@tanstack/react-query';

const useAddNewTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    //mutation function
    mutationFn: async (newTodo: { title: string }) => {
      await fetch('http://localhost:3004/todos', {
        body: JSON.stringify(newTodo),
        headers: {
          'Content-type': 'application/json',
        },
        method: 'POST',
      });
    },
    //refetch after request on success or error
    onSettled() {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    //optimistic UI
    onMutate: async (newTodo: { title: string }) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const prevTodos = queryClient.getQueryData(['todos']);
      if (prevTodos) {
        queryClient.setQueryData(
          ['todos'],
          [...prevTodos, { id: Math.random().toString(), title: newTodo.title }],
        );
      }
      return { prevTodos };
    },
    //return to prev data if mutation fails
    onError: (err, variables, context) => {
      if (context?.prevTodos) {
        queryClient.setQueryData(['todos'], context.prevTodos);
      }
    },
  });
};
export default useAddNewTodo;
