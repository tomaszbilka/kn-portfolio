import { ReactElement, useEffect, useState } from 'react';

import styles from './ConditionalHook.module.css';

const logoImg = (
  <img
    src="https://d33wubrfki0l68.cloudfront.net/ff2c4276d392fb17811adec37448ee0ed9291fd9/1c9f5/selleo-logo.svg"
    alt="best software hause logo"
  />
);

const RenderIcon: React.FC = () => {
  const [logo, setLogo] = useState<ReactElement | null>(null);

  useEffect(() => setLogo(logoImg), []);

  return logo;
};

const ConditionalHook: React.FC = () => {
  const [shouldHookRun, setShouldHookRun] = useState<boolean>(false);
  return (
    <section className="container">
      <h3> ConditionalHook</h3>
      <div className={styles.controls}>
        <input
          checked={shouldHookRun}
          id="condition"
          name="condition"
          onChange={() => setShouldHookRun((prev) => !prev)}
          type="checkbox"
        />
        <label htmlFor="condition">Should hook run?</label>
      </div>
      <div className={styles.imgWrapp}>{shouldHookRun && <RenderIcon />}</div>
    </section>
  );
};

export default ConditionalHook;
