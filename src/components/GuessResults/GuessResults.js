import React from 'react'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guess from '../Guess/Guess'

function GuessResults({ guesses }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((number) => (
        <Guess guess={guesses[number]} key={number} />
      ))}
    </div>
  )
}

export default GuessResults
