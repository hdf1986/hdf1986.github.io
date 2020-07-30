import Head from 'next/head';
import Link from 'next/link';

import styles from './LandingLayout.module.scss'

const LandingLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hugo Farji</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;700&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.mainContainer}>
        <nav className={styles.navbar}>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}><Link href="/">Inicio</Link></li>
            <li className={styles.navbarItem}><Link href="/">Mis experimentos</Link></li>
            <li className={styles.navbarItem}><Link href="/">Blog</Link></li>
            <li className={styles.navbarItem}><Link href="/">Contacto</Link></li>
          </ul>
        </nav>
       {children}
      </div>
    </>
  )
}

export default LandingLayout