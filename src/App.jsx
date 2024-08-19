import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Square from '../src/Components/Square';

function App() {

  const numbers = [1,2,3,4,5,6,7,8,9];
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(){
    const nextSquares = squares.slice();
    nextSquares[0] = 'X'; 
    setSquares(nextSquares);
  }

  return (
    <>
      <div className='w-max mx-auto grid grid-cols-3 border'>
        {
          numbers.map((number) => (
            <Square onSquareClick={handleClick}/>
          ))
        }
      </div>
    </>
  )
}

export default App
