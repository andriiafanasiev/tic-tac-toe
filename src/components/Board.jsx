import React from 'react';
import Square from './Square';
import { useState } from 'react';

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(numberOfSquare) {
    if (squares[numberOfSquare] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    xIsNext
      ? (nextSquares[numberOfSquare] = 'X')
      : (nextSquares[numberOfSquare] = 'O');
    setXIsNext(!xIsNext);

    setSquares(nextSquares);
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  setTimeout(() => {
    document.querySelector('.message').style.display = 'none';
  }, 2000);
  return (
    <div className="board">
      <h2
        className="message"
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          fontSize: '2rem',
          backgroundColor: 'white',
          position: 'absolute',
        }}
      >
        Game begins!
      </h2>
      ;<div className="status">{status}</div>
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
    </div>
  );
}
