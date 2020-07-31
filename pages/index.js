import LandingLayout from '~/app/layouts/LandingLayout'
import RandomTypingText from '~/app/components/RandomTypingText';
import LandingArrow from '~/app/components/LandingArrow';


import styles from './index.module.scss'

const Index = () => {
  return (
    <LandingLayout>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          Hola, soy <span className={styles.headerName}>Hugo Farji</span>
        </h1>
        <h2 className={styles.headerSubtitle}>
          <RandomTypingText delay={100} texts={['Node developer',
                                                'Ruby developer',
                                                'Rubik\'s Cube enthusiast',
                                                'Web development mentor']}/>
        </h2>

        <LandingArrow />
      </div>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          Hola, soy <span className={styles.headerName}>Hugo Farji</span>
        </h1>
        <h2 className={styles.headerSubtitle}>
          <RandomTypingText delay={100} texts={['Node developer',
                                                'Ruby developer',
                                                'Rubik\'s Cube enthusiast',
                                                'Web development mentor']}/>
        </h2>

      </div>
    </LandingLayout>
  )
}

export default Index;