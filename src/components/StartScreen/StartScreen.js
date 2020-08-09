import React from "react";
import "./StartScreen.scss";
import SetPlayersCount from "./SetPlayersCount/SetPlayersCount";
import NewPlayerInput from "./NewPlayerInput/NewPlayerInput";
import MainButton from "../MainButton/MainButton";

const StartScreen = (props) => {
  // Set number of players inputs
  const playersInputs = [];
  for (let i = 1; i <= props.playersCount; i++) {
    playersInputs.push(i);
  }
  const inputs = playersInputs.map((player) => (
    <NewPlayerInput
      player={player}
      key={player}
      updated={props.updated}
      players={props.players}
    />
  ));
  return (
    <div className="start-screen" id="start-screen">
      <div className="start-screen__info" id="start-screen-info">
        <h1 className="start-screen__info-title">Blackjack</h1>
        <h2 className="start-screen__info-text">Set players and start game!</h2>
        <SetPlayersCount
          changed={props.changed}
          playersCount={props.playersCount}
        />

        <form className="start-screen__info-control" id="info-control">
          {inputs}
        </form>
        <MainButton clicked={props.showStartScreen} />
      </div>
    </div>
  );
};

export default StartScreen;
