import { CurrentUserContext } from '../../context/context';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const context = useContext(CurrentUserContext);

  return (
    <nav className={styles.container}>
      <picture>
        <Link to={`/`}>HOME</Link>
      </picture>
      <p>{context?.currentUser}</p>
      <ul className={styles.navContainer}>
        <li>
          <Link to={`/tasks`}>tasks</Link>
        </li>
        <li>
          <Link to={`/optimisticquery`}>OptimisticQuery</Link>
        </li>
        <li>
          <Link to={'/graphql'}>graphql</Link>
        </li>
        <li>
          <Link to={'/websocket'}>WebSocket</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
