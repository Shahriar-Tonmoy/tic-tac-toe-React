import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Square from '../src/Components/Square';

function App() {

  // const numbers = [1,2,3,4,5,6,7,8,9];
  const [isNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(squares);

  function handleClick(i) {
    // if square is not null it will return so that that square value won't be overwritten
    if (squares[i]) {
      return;
    }
    // console.log(i);
    const nextSquares = squares.slice();
    // nextSquares[i] = 'X';
    if(isNext){
      nextSquares[i] = 'X';
    }
    else{
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
  setIsNext(!isNext);
  }

  return (
    <>
      <div className='w-max mx-auto grid grid-cols-3 border'>
        {
          squares.map((number,index) => (
            <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
          ))
        }
      </div>
    </>
  )
}

export default App
