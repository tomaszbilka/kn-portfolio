import Hover from './Hover';
import Rectangle from './Rectangle';

import styles from './RenderPropsTask.module.css';

const RenderPropsTask = () => {
  return (
    <section className="container">
      <h3>RenderPropsTask</h3>
      <section className={styles.group}>
        <Hover render={(hovering) => <Rectangle title="first" isHover={hovering} />} />
        <Hover render={(hovering) => <Rectangle title="second" isHover={hovering} />} />
        <Hover render={(hovering) => <Rectangle title="third" isHover={hovering} />} />
      </section>
    </section>
  );
};

export default RenderPropsTask;
