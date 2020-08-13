import React from "react";
import "./GameTable.scss";
import PlayerStation from "./PlayerStation/PlayerStation";
import CardsPool from "./CardsPool/CardsPool";
import GameResult from "./GameResult/GameResult";

const GameTable = (props) => {
  const players = props.players.map((player, index) => (
    <PlayerStation
      playerScore={player.score}
      playerStatus={player.status}
      playerCards={player.cardsArr}
      playersCount={props.playersCount}
      activePlayer={props.activePlayer}
      name={player.name}
      index={index}
      key={player.id}
    />
  ));
  return (
    <div className="game">
      {players}
      <CardsPool
        pullCardFn={props.pullCardFn}
        activePlayer={props.activePlayer}
      />
      <GameResult />
      <button className="game__button-pass" id="btn-pass">
        Pass
      </button>
    </div>
  );
};

export default GameTable;
