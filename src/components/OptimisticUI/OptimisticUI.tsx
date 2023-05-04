import { useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import useAddNewTodo from '../../hooks/useAddNewTodo';
import useDeleteTodo from '../../hooks/useDeleteTodo';
import useGetTodos from '../../hooks/useGetTodos';

import styles from './OptimisticUI.module.css';

type TTodo = {
  title: string;
  id: number;
};

const OptimisticUI: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { data, isError, isLoading } = useGetTodos();
  const { isError: isAddError, mutate: addTodo } = useAddNewTodo();
  const { isError: isDeleteError, mutate: deleteTodo } = useDeleteTodo();
  const queryClient = useQueryClient();

  const addTodoHandler = () => {
    const newTodo = inputRef.current?.value;
    if (newTodo?.length === 0 || newTodo === undefined) return;
    addTodo({ title: newTodo });
    if (inputRef.current === null) return;
    inputRef.current.value = '';
  };

  const removeTodoHandler = (todo: TTodo) => {
    deleteTodo(todo.id);
  };

  const error = isError || isAddError || isDeleteError;

  const cancelQueryHandler = () => {
    queryClient.cancelQueries({ queryKey: ['todos'] });
  };

  if (isLoading) return <p>Loading...</p>;

  const item = (todo: TTodo) => {
    return (
      <li key={todo.id}>
        <button className={styles.todo} onClick={() => removeTodoHandler(todo)}>
          {todo.title}
        </button>
      </li>
    );
  };

  return (
    <section className="container">
      <h3>OptimisticUI</h3>
      <button onClick={cancelQueryHandler} className={styles.cancel}>
        Cancel fetching
      </button>
      <div className={styles.control}>
        <input ref={inputRef} type="text" />
        <button onClick={addTodoHandler}>ADD</button>
      </div>
      {!isLoading && !error && <ul>{data.map((todo: TTodo) => item(todo))}</ul>}
      {error && <p>Error occured!!</p>}
    </section>
  );
};

export default OptimisticUI;
