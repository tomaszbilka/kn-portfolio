import { useContext, useRef } from 'react';
import { CurrentUserContext } from '../context/context';

const Home: React.FC = () => {
  const context = useContext(CurrentUserContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const setUserNameHandler = () => {
    if (inputRef.current !== null) {
      context?.setCurrentUser(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <section>
      <h3>Example of undefined context default vaue</h3>
      <input type="text" ref={inputRef} />
      <button onClick={setUserNameHandler}>SET</button>
    </section>
  );
};

export default Home;
