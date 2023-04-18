import styles from './NoVirtualizedList.module.css';

const list = Array.from({ length: 1000 }, (_, index) => index);

const NoVirtualizedList: React.FC = () => {
  const listRow = (row: number) => (
    <li className={styles.listElement} key={row}>
      Row number - {row}
    </li>
  );

  return (
    <section className="container">
      <h3>NoVirtualizedList</h3>
      <ul className={styles.listContainer}>{list.map((row) => listRow(row))}</ul>
    </section>
  );
};

export default NoVirtualizedList;
