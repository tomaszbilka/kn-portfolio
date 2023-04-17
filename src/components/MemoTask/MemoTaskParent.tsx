import { useMemo, useState } from 'react';
import { countNumberOfPrimesFromRange } from './helpers';
import MemoTaskChild from './MemoTaskChild';

import styles from './MemoTaskParent.module.css';

const MemoTaskParent: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const heavyCalculation = useMemo(() => countNumberOfPrimesFromRange(0, 40000), []);

  console.log('MemoTaskPARENT - render');
  return (
    <section className="container">
      <h3>MemoTaskParent</h3>
      <div className={styles.control}>
        <p>{counter}</p>
        <button
          className={styles.button}
          onClick={() => setCounter((prev) => prev + 1)}
          type="button"
        >
          +
        </button>
      </div>
      <MemoTaskChild calculation={heavyCalculation} />
    </section>
  );
};

export default MemoTaskParent;
