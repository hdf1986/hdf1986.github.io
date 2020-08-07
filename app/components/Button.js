import styles from './Button.module.scss'

const Button = ({
  value,
  link,
  href
}) => {
  if (link) {
    return (
      <a className={styles.button} href={href}>
        {value}
      </a>
    )
  }
  return (
    <button className={styles.button}>
      {value}
    </button>
  )
}

Button.defaultProps = {
  value: '',
  link: false
}

export default Button;