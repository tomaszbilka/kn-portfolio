import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import styles from './ErrorBoundaryTask.module.css';

type TProps = {
  error: {
    message: string;
  };
  resetErrorBoundary: () => void;
};

const fallbackRender = ({ error, resetErrorBoundary }: TProps) => (
  <details>
    <summary className={styles.error}>Error occured!</summary>
    <div className={styles.info}>
      <code>{error?.message}</code>
    </div>
    <button onClick={() => resetErrorBoundary()}>reset</button>
  </details>
);

const CounterWithError: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const increaseCounterHandler = () => {
    if (counter > 4) {
      //ignore ts to allow component crash
      // @ts-ignore
      setCounter((prev) => prev.toUpperCase());
    } else {
      setCounter((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.counter}>
      <p>{counter}</p>
      <button type="button" onClick={increaseCounterHandler}>
        add
      </button>
    </div>
  );
};

const ErrorBoundaryTask: React.FC = () => (
  <section className="container">
    <h3>ErrorBoundary</h3>
    <ErrorBoundary fallbackRender={fallbackRender}>
      <CounterWithError />
    </ErrorBoundary>
  </section>
);

export default ErrorBoundaryTask;
