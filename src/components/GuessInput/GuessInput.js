import React from 'react'

function GuessInput({ addGuess, gameStatus }) {
  const [guess, setGuess] = React.useState('')

  function handleGuess(event) {
    event.preventDefault()
    console.log(guess)
    addGuess(guess)
    setGuess('')
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleGuess}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        disabled={gameStatus !== 'running'}
        autoComplete='off'
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        id='guess-input'
        type='text'
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default GuessInput
