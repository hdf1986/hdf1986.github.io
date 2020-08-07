import Button from './Button';
import styles from './ExperimentCard.module.scss'

const ExperimentCard = () => {
  return (
    <article className={styles.experimentCard}>
      <div></div>
      <div>
        <h2>Test</h2>
        <p>Lorem</p>
        <Button value="visitar" link href="test"/>
      </div>
    </article>
  )
}

export default ExperimentCard;