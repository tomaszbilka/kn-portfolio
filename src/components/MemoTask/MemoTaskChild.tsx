import React from 'react';

import styles from './MemoTaskChild.module.css';

type TProps = {
  calculation: number;
};

const arePropsEqual = (oldProps: TProps, newProps: TProps) => {
  //if return true - no rerender
  return oldProps.calculation === newProps.calculation;
};

const MemoTaskChild = ({ calculation }: TProps) => {
  console.log('MemoTaskChild - render');
  return (
    <section className={styles.wrap}>
      <h4>The number of prime numbers in range 0 to 20000</h4>
      <p>{calculation}</p>
    </section>
  );
};

export default React.memo(MemoTaskChild, arePropsEqual);
