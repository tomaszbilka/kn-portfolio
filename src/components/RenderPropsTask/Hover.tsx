import { ReactNode, useState } from 'react';

type TMouse = {
  x: number;
  y: number;
};

type TProps = {
  render: (isHover: boolean, position: TMouse) => ReactNode;
};

const Hover = ({ render }: TProps) => {
  const [isHover, setIsHoover] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<TMouse>({ x: 0, y: 0 });

  const mouseMove = (event: React.MouseEvent<HTMLDivElement>) =>
    setMousePosition((prev) => ({ ...prev, x: event.clientX, y: event.clientY }));

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div
      onMouseEnter={() => setIsHoover(true)}
      onMouseLeave={() => setIsHoover(false)}
      onMouseMove={mouseMove}
    >
      {render(isHover, mousePosition)}
    </div>
  );
};

export default Hover;
