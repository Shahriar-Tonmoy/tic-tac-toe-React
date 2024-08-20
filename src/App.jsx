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

  const theWinner = winner(squares);
  let gameStatus;
  if(theWinner){
    gameStatus = 'The winner is ' + theWinner;
  }else{
    gameStatus = 'Move for ' + (isNext ? 'X' : 'O');
  }

  function handleClick(i) {
    // if square is not null it will return so that that square value won't be overwritten
    if (squares[i] || winner(squares)) {
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
      <div className='text-4xl text-green-600 text-center'>{gameStatus}</div>
      <div className='w-max mx-auto grid grid-cols-3 border'>
        {
          squares.map((number,index) => (
            <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
          ))
        }
      </div>
    </>
  )

   function winner(squares) {
    const conditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let i=0; i<conditions.length; i++){
      const [first, second, third] = conditions[i];
      if(squares[first] && squares[first] === squares[second] && squares[first] === squares[third]){
        return squares[first];
      }
    }
    return null;
  }
}

export default App
