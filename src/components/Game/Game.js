import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import LostBanner from '../LostBanner'
import WonBanner from '../WonBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  // running, won, lost
  const [gameStatus, setGameStatus] = React.useState('running')
  const [guesses, setGuesses] = React.useState([])

  function addGuess(guess) {
    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses)

    if (guess.toUpperCase() === answer) {
      setGameStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} gameStatus={gameStatus} />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  )
}

export default Game
