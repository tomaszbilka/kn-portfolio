import styles from './InnerComponent.module.css';

type TProps = {
  user: string;
};

const InnerComponent = ({ user }: TProps) => {
  return (
    <div className={styles.wrap}>
      <div>InnerComponent</div>
      <p className={styles.text}>no props drilling</p>
      <p>
        user name: <span className={styles.user}>{user}</span>
      </p>
    </div>
  );
};

export default InnerComponent;
