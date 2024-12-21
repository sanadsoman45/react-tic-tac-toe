import { useState } from "react";


export default function GameBoard({onSelectSquare, board}) {

    

    // const [gameBoardState, setGameBoardState] = useState(initialGameBoard);

    // const handleSquareClick= (rowIndex, colIndex)=>{
    //     setGameBoardState((prevGameBoardState)=> {
    //         const updatedBoard = [...prevGameBoardState.map(innerArray=> [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}><button disabled={playerSymbol} onClick={()=> onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>
              ))}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
