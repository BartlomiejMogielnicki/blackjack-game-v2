import React from "react";
import "./GameResult.scss";

const GameResult = () => {
  return (
    <div className="game__result" id="game-result">
      <span className="game__result-text"></span>
      <button className="game__result-button-restart" id="btn-restart">
        Play again
      </button>
    </div>
  );
};

export default GameResult;
