import styles from './InnerComponent.module.css';

import type { TUser } from './ContainmentTask';

type TProps = { user: Omit<TUser, 'id'> };

const InnerComponent = ({ user }: TProps) => {
  const { name, address } = user;
  return (
    <div className={styles.wrap}>
      <div>InnerComponent</div>
      <p className={styles.text}>no props drilling</p>
      <p>
        user name: <span className={styles.user}>{name}</span>
      </p>
      <p>
        address: {address.city} {address.state}
      </p>
    </div>
  );
};

export default InnerComponent;
