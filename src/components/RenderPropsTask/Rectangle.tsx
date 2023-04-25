import styles from './Rectangle.module.css';

type TProps = {
  isHover: boolean;
  title: string;
};

const Rectangle = ({ isHover, title }: TProps) => {
  return <div className={styles.rectangle}>{isHover && <p>{title}</p>}</div>;
};

export default Rectangle;
