import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <picture>
        <Link to={`/`}>LOGO</Link>
      </picture>
      <ul>
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
