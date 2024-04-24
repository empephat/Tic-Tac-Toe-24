// Types
type Player = "X" | "O";

type SquareProps = {
  value: Player | null;
  onClick: () => void;
};

const Square = ({ value, onClick }: SquareProps) => {
  const color = value === "X" ? "playButton x" : "playButton o";

  return (
    <div>
      <div className="col">
        <div className="square">
          <button
            aria-label="click to play"
            className={color}
            onClick={onClick}
          >
            {value}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Square;
