import { useState, useEffect } from "react";
// Components
import Header from "./Header";
import GameBoard from "./GameBoard";
import Button from "./Button";

// Types
type Player = "X" | "O";
type Board = (Player | null)[];

const Container = () => {
  const initialBoardState = Array(9).fill(null);
  const [board, setBoard] = useState<Board>(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | null>(null);

  useEffect(() => {
    // Check for winner after each move
    if (checkForWinner(board, currentPlayer)) {
      setWinner(currentPlayer);
    }
  }, [board, currentPlayer]);

  const handleSquareClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    // Check for winner after updating the board
    if (checkForWinner(newBoard, currentPlayer)) {
      setBoard(newBoard); // Update board
      setWinner(currentPlayer); // Update winner
    } else {
      // Switch player if there's no winner
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const checkForWinner = (board: Board, player: Player): boolean => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i * 3] === player &&
        board[i * 3 + 1] === player &&
        board[i * 3 + 2] === player
      ) {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[i] === player &&
        board[i + 3] === player &&
        board[i + 6] === player
      ) {
        return true;
      }
    }

    // Check diagonals
    if (
      (board[0] === player && board[4] === player && board[8] === player) ||
      (board[2] === player && board[4] === player && board[6] === player)
    ) {
      return true;
    }

    // No winner found
    return false;
  };

  const restartGame = () => {
    setBoard(initialBoardState);
    setCurrentPlayer("X");
    setWinner(null);
  };

  const renderResultMessage = () => {
    if (winner) {
      return (
        <div className="text-white bg-warning w-25 center mx-auto rounded-5">{`${winner} wins!`}</div>
      );
    } else if (!board.includes(null)) {
      return (
        <div className="text-white bg-danger w-25 center mx-auto rounded-5">
          It's a draw!
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="container bg-light border border-dark">
      <Header />
      <br />
      <div className="text-center text-uppercase fs-3">
        {renderResultMessage()}
      </div>
      <br />

      <div className="row row-cols-3 gy-2 gx-2">
        <GameBoard
          board={board}
          handleSquareClick={handleSquareClick}
          currentPlayer={currentPlayer}
        />
      </div>
      <Button restartGame={restartGame} />
    </div>
  );
};

export default Container;
