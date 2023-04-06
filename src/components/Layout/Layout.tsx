import Footer from '../Footer';
import Navigation from '../Navigation';
import type { ReactNode } from 'react';

import styles from './Layout.module.css';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.mainContainer}>
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
