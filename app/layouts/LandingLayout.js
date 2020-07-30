import Head from "next/head";

import styles from './LandingLayout.module.scss'

const LandingLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hugo Farji</title>
      </Head>
      <div className={styles.mainContainer}>
       {children}
      </div>
    </>
  )
}

export default LandingLayout