import { useEffect, useState } from 'react';

const RandomTypingText = ({
  texts,
  delay
}) => {
  const [currentText, setCurrentText] = useState('')
  const [currentTarget, setCurrentTarget] = useState('')
  const [previousTarget, setPreviousTarget] = useState('')
  const setNewTarget = () => {
    if(currentText !== currentTarget) return

    if(currentTarget === '') return setCurrentTarget(texts.filter(text => text !== previousTarget)[Math.floor(Math.random() * (texts.length - 1))])

    setPreviousTarget(currentTarget)
    setCurrentTarget('')
  }
  
  useEffect(() => {
    setNewTarget()
  }, [texts])

  useEffect(() => {
    const changeText = () => {
      if (currentTarget === currentText) return setNewTarget()
      if (currentTarget === '') {
        setCurrentText(currentText.slice(0, -1))
      } else {
        setCurrentText(`${currentText}${currentTarget.slice(currentText.length, currentText.length + 1)}`)
      }
    }

    const timeout = setTimeout(changeText, delay)
    return () => clearTimeout(timeout)
  }, [currentText, currentTarget, delay])
  
  return (
    <>
      {currentText}
    </>
  )
}

RandomTypingText.defaultProps = {
  texts: [''],
  delay: 100
}

export default RandomTypingText;