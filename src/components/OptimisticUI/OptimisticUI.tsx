import { useRef } from 'react';
import useGetTodos from '../../hooks/useGetTodos';
import useAddNewTodo from '../../hooks/useAddNewTodo';

import styles from './OptimisticUI.module.css';

type TTodo = {
  title: string;
  id: number;
};

const OptimisticUI: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { data, isError, isLoading } = useGetTodos();
  const { mutate } = useAddNewTodo();

  const addTodoHandler = () => {
    const newTodo = inputRef.current?.value;
    if (newTodo?.length === 0 || newTodo === undefined) return;
    mutate({ title: newTodo });
    if (inputRef.current === null) return;
    inputRef.current.value = '';
  };

  const removeTodoHandler = (todo: TTodo) => {
    console.log(todo);
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
      <div className={styles.control}>
        <input ref={inputRef} type="text" />
        <button onClick={addTodoHandler}>ADD</button>
      </div>
      {!isLoading && !isError && <ul>{data.map((todo: TTodo) => item(todo))}</ul>}
    </section>
  );
};

export default OptimisticUI;
