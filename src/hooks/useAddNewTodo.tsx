import { useMutation } from '@tanstack/react-query';

const useAddNewTodo = () =>
  useMutation({
    mutationFn: async (newTodo: { title: string }) => {
      console.log(newTodo);
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
  });

export default useAddNewTodo;
