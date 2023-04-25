import styles from './Rectangle.module.css';

type TProps = {
  isHover: boolean;
  mousePosition: { x: number; y: number };
  title: string;
};

const Rectangle = ({ isHover, mousePosition, title }: TProps) => {
  return (
    <div className={styles.rectangle}>
      {isHover && (
        <p
          style={{
            left: mousePosition.x,
            position: 'absolute',
            top: mousePosition.y - 12,
          }}
        >
          {title}
        </p>
      )}
    </div>
  );
};

export default Rectangle;
