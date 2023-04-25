type TProps = {
  backgroundColor?: string;
  border?: string;
  borderRadius?: number;
  color?: string;
  title: string;
};

const GenericButton = ({
  backgroundColor = 'blue',
  border = 'none',
  borderRadius,
  color = 'white',
  title,
}: TProps) => {
  const style = {
    backgroundColor,
    border,
    borderRadius,
    color,
    margin: '5px',
    padding: '8px 20px',
    title,
  };

  return (
    <button
      onClick={() => console.log(`You clicked button with title: ${title}`)}
      style={style}
      type="button"
    >
      {title}
    </button>
  );
};

export default GenericButton;
