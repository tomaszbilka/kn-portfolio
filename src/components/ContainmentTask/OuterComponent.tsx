import styles from './OuterComponent.module.css';

type TProps = {
  children: React.ReactNode;
};

const OuterComponent = ({ children }: TProps) => {
  return (
    <div className={styles.wrap}>
      OuterComponent
      {children}
    </div>
  );
};

export default OuterComponent;
