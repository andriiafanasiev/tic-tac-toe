import React from 'react';
import Square from './Square';
import { useState } from 'react';

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(numberOfSquare) {
    if (squares[numberOfSquare]) {
      return;
    }
    const nextSquares = squares.slice();

    xIsNext
      ? (nextSquares[numberOfSquare] = 'X')
      : (nextSquares[numberOfSquare] = 'O');
    setXIsNext(!xIsNext);

    setSquares(nextSquares);
  }
  return (
    <>
      <div className="board-row">
        <Square
          className="square"
          onSquareClick={() => handleClick(0)}
          value={squares[0]}
        />
        <Square
          className="square"
          onSquareClick={() => handleClick(1)}
          value={squares[1]}
        />
        <Square
          className="square"
          onSquareClick={() => handleClick(2)}
          value={squares[2]}
        />
      </div>
      <div className="board-row">
        <Square
          className="square"
          onSquareClick={() => handleClick(3)}
          value={squares[3]}
        />
        <Square
          className="square"
          onSquareClick={() => handleClick(4)}
          value={squares[4]}
        />
        <Square
          className="square"
          onSquareClick={() => handleClick(5)}
          value={squares[5]}
        />
      </div>
      <div className="board-row">
        <Square
          className="square"
          onSquareClick={() => handleClick(6)}
          value={squares[6]}
        />
        <Square
          className="square"
          onSquareClick={() => handleClick(7)}
          value={squares[7]}
        />
        <Square
          className="square"
          onSquareClick={() => handleClick(8)}
          value={squares[8]}
        />
      </div>
    </>
  );
}
