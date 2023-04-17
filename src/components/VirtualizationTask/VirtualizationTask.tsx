import { FixedSizeList as List } from 'react-window';

import styles from './VirtualizationTask.module.css';

type TProps = {
  index: number;
  style: object;
};

const VirtualizationTask: React.FC = () => {
  const Row = ({ index, style }: TProps) => <div style={style}>Row number - {index}</div>;

  return (
    <section className="container">
      <h3 className={styles.title}>VirtualizationTask</h3>
      <List
        height={150}
        itemCount={1000}
        itemSize={35}
        width={500}
        style={{ border: '1px solid #000' }}
      >
        {Row}
      </List>
    </section>
  );
};

export default VirtualizationTask;
