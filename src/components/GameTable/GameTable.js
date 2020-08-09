import React from "react";
import "./GameTable.scss";
import PlayerStation from "./PlayerStation/PlayerStation";
import CardsPool from "./CardsPool/CardsPool";

const GameTable = (props) => {
  const players = props.players.map((player, index) => (
    <PlayerStation name={player.name} index={index} key={player.id} />
  ));
  return (
    <div className="game">
      {players}
      <CardsPool />
    </div>
  );
};

export default GameTable;
