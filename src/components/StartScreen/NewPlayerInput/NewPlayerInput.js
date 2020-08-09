import React from "react";
import "./NewPlayerInput.scss";

const NewPlayerInput = ({ player, id, updated }) => {
  const name = `player${player - 1}-name`;
  const value = `Player ${player}`;
  const playerArrNumber = player - 1;
  return (
    <label className="start-screen__info-control-input-label">
      <i className="fas fa-user"></i>
      <input
        className="start-screen__info-control-input"
        type="text"
        name={name}
        id={name}
        placeholder={value}
        key={id}
        onChange={(e) => updated(e.target.value, playerArrNumber)}
      />
    </label>
  );
};

export default NewPlayerInput;
