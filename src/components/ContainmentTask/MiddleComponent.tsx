import styles from './MiddleComponent.module.css';

type TProps = {
  children: React.ReactNode;
};

const MiddleComponent = ({ children }: TProps) => {
  return (
    <div className={styles.wrap}>
      MiddleComponent
      {children}
    </div>
  );
};

export default MiddleComponent;
