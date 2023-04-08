import { useContext, useRef } from 'react';
import { CurrentUserContext } from '../../context/context';

import styles from './ContextTask.module.css';

const ContextTask: React.FC = () => {
  const context = useContext(CurrentUserContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const setUserNameHandler = () => {
    if (inputRef.current !== null) {
      context?.setCurrentUser(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <section className={styles.container}>
      <h3>Example of undefined context default vaue</h3>
      <input className={styles.input} type="text" ref={inputRef} />
      <button onClick={setUserNameHandler}>SET</button>
    </section>
  );
};

export default ContextTask;
