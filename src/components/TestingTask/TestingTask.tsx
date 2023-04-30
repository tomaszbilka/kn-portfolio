import { useWindowSize } from 'react-use';

import styles from './TestingTask.module.css';

const TestingTask: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <section className="container">
      <h3>TestingTask</h3>
      <p className={styles.text}>
        width: <span data-testid="width">{width}</span> px
      </p>
      <p className={styles.text}>
        hieght: <span data-testid="height">{height}</span> px
      </p>
    </section>
  );
};

export default TestingTask;
