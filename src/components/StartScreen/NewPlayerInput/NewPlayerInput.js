import React from "react";

const NewPlayerInput = ({ player, id, updated, players }) => {
  const name = `player${player - 1}-name`;
  const playerArrNumber = player - 1;
  return (
    <label className="start-screen__info-control-input-label">
      <i className="fas fa-user"></i>
      <input
        className="start-screen__info-control-input"
        type="text"
        name={name}
        id={name}
        key={id}
        value={players[playerArrNumber].name}
        onChange={(e) => updated(e.target.value, playerArrNumber)}
      />
    </label>
  );
};

export default NewPlayerInput;
