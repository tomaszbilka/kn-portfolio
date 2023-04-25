import { ReactNode, useState } from 'react';

type TProps = {
  render: (isHover: boolean) => ReactNode;
};

const Hover = ({ render }: TProps) => {
  const [isHover, setIsHoover] = useState(false);
  const mouseOver = () => setIsHoover(true);
  const mouseOut = () => setIsHoover(false);

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
      {render(isHover)}
    </div>
  );
};

export default Hover;
