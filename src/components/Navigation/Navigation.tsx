import { CurrentUserContext } from '../../context/context';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const context = useContext(CurrentUserContext);

  return (
    <nav className={styles.container}>
      <picture>
        <Link to={`/`}>LOGO</Link>
      </picture>
      <p>{context?.currentUser}</p>
      <ul className={styles.navContainer}>
        <li>
          <Link to={`/contact`}>contact</Link>
        </li>
        <li>
          <Link to={`/about`}>about</Link>
        </li>
        <li>
          <Link to={'/blog'}>blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
