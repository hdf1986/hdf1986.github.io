import LandingLayout from '~/app/layouts/LandingLayout'
import ExperimentCard from '~/app/components/ExperimentCard'

import styles from './index.module.scss'

const Experiments = () => {
  return (
    <LandingLayout>
      <main className={styles.experimentsContainer}>
        <ExperimentCard />
        <ExperimentCard />
        <ExperimentCard />
        <ExperimentCard />
      </main>
    </LandingLayout>
  )
}

export default Experiments;