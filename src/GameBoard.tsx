// Components
import Square from "./Square";

// Types
type Player = "X" | "O";
type Board = (Player | null)[];

type BoardProps = {
  board: Board;
  handleSquareClick: (index: number) => void;
  currentPlayer: Player;
};

const Board = ({ board, handleSquareClick }: BoardProps) => {
  return (
    <>
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => handleSquareClick(index)}
        />
      ))}
    </>
  );
};

export default Board;
