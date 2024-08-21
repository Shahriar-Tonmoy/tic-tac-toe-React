import { useState } from 'react'
import Board from './Components/Board';
import bgImage from '/bg_image.jpg';

function Game() {
  return (
    <>
      <div className='flex justify-center items-center h-screen ' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Board></Board>
      </div>
    </>
  )
}

export default Game
