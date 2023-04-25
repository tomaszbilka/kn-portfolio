import Hover from './Hover';
import Rectangle from './Rectangle';

import styles from './RenderPropsTask.module.css';

const RenderPropsTask = () => {
  return (
    <section className="container">
      <h3>RenderPropsTask</h3>
      <section className={styles.group}>
        <Hover
          render={(hovering, position) => (
            <Rectangle title="first" isHover={hovering} mousePosition={position} />
          )}
        />
        <br />
        <Hover
          render={(hovering, position) => (
            <Rectangle title="second" isHover={hovering} mousePosition={position} />
          )}
        />
        <br />
        <Hover
          render={(hovering, position) => (
            <Rectangle title="third" isHover={hovering} mousePosition={position} />
          )}
        />
      </section>
    </section>
  );
};

export default RenderPropsTask;
