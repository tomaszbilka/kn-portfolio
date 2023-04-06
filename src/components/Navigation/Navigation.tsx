import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={styles.container}>
      <picture>
        <Link to={`/`}>LOGO</Link>
      </picture>
      <ul className={styles.navContainer}>
        <li>
          <Link to={`/contact`}>contact</Link>
        </li>
        <li>
          <Link to={`/about`}>about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
