import React from "react";

const SetPlayersCount = (props) => {
  return (
    <label htmlFor="players-number">
      Number of players:
      <input
        className="start-screen__info-control-input-players"
        type="number"
        name="players-number"
        id="players-number"
        placeholder="1"
        min="1"
        max="4"
        value={props.playersCount}
        onChange={(e) => props.changed(e.target.value)}
      />
    </label>
  );
};

export default SetPlayersCount;
