import useFetchHTTP from '../../hooks/useFetchData';

import styles from './CustomHookTask.module.css';

const url = 'https://picsum.photos/';
const query = '300';

const CustomHookTask: React.FC = () => {
  const [sendRequest, data, isLoading, error] = useFetchHTTP();

  const sendRequetHandler = () => {
    sendRequest(url, query);
  };

  return (
    <section className="container">
      <h3>My own custom hook to fetch random picture:</h3>
      <button
        className={styles.btn}
        disabled={isLoading}
        onClick={sendRequetHandler}
        type="button"
      >
        Random img
      </button>
      <figure className={styles.image}>
        {!isLoading && data && !error && <img src={data} alt="random" />}
        {isLoading && <p className={styles.loading}>Loading...</p>}
        {!isLoading && error && <p className={styles.error}>{error}</p>}
      </figure>
    </section>
  );
};

export default CustomHookTask;
