type ButtonProps = {
  restartGame: () => void;
};

const Button = ({ restartGame }: ButtonProps) => {
  return (
    <div className="buttonContainer d-flex justify-content-center">
      <button
        onClick={restartGame}
        className="btn btn-danger my-4 px-3 py-3 fs-3"
      >
        Restart Game
      </button>
    </div>
  );
};

export default Button;
