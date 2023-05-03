import styles from './DateTesting.module.css';

const DateTesting: React.FC = () => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <section className="container">
      <h3>DateTesting</h3>
      <div>
        <p className={styles.wrap}>
          data:{' '}
          <time dateTime={date} data-testid="date">
            {date}
          </time>
        </p>
        <p className={styles.wrap}>
          load page time:{' '}
          <time dateTime={time} data-testid="time">
            {time}
          </time>
        </p>
      </div>
    </section>
  );
};

export default DateTesting;
