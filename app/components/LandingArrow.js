import Link from 'next/link'

import styles from './LandingArrow.module.scss'

const LandingArrow = () => {
  return (
    <Link href="#">
      <a className={styles.landingArrow}>
      </a>
    </Link>
  )
}

export default LandingArrow;