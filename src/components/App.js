import React from "react";
import "./App.scss";
import StartScreen from "./StartScreen/StartScreen";
import GameTable from "./GameTable/GameTable";

class App extends React.Component {
  state = {
    cardsDeckId: 0,
    playersCount: 1,
    activePlayer: 0,
    gameOn: true,
    showStartScreen: true,
    players: [
      {
        id: 0,
        name: "Player 1",
        score: 0,
        cardsNum: 0,
        status: "In game",
      },
    ],
    lostArray: [],
    passArray: [],
  };

  // Get new cards deck id from API
  getNewCardsDeck = async () => {
    let cardsDeckId = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    )
      .then((response) => response.json())
      .then((data) => {
        return data.deck_id;
      });
    return cardsDeckId;
  };

  // Set new cards deck id
  async componentDidMount() {
    const cardsDeckId = await this.getNewCardsDeck();
    this.setState({
      cardsDeckId,
    });
  }

  // Update players count
  updatePlayersCount = (setPlayers) => {
    // Prevent set other values than 1-4
    if (setPlayers >= 1 && setPlayers <= 4) {
      // Update player objects array
      const players = [];
      for (let i = 0; i < setPlayers; i++) {
        const playerObject = {
          id: i,
          name: `Player ${i + 1}`,
          score: 0,
          cardsNum: 0,
          status: "In game",
        };
        players.push(playerObject);
      }

      this.setState({
        playersCount: +setPlayers,
        players: players,
      });
    }
  };

  // Update player names
  updatePlayersNames = (playerName, playerArrNumber) => {
    const players = this.state.players;
    // Check if player's name is not empty
    if (playerName !== "") {
      players[playerArrNumber].name = playerName;
    } else {
      players[playerArrNumber].name = `Player ${playerArrNumber + 1}`;
    }
    this.setState({
      players,
    });
  };

  // Add casino croupier player if single player
  addCroupierIfNeeded = () => {
    const players = [...this.state.players];
    if (players.length === 1) {
      const playerCpuObject = {
        id: 1,
        name: "Croupier",
        score: 0,
        cardsNum: 0,
        status: "In game",
      };
      players.push(playerCpuObject);

      this.setState({
        players,
      });
    }
  };

  handleStartNewGame = () => {
    this.addCroupierIfNeeded();

    // Restart data
    this.setState({
      lostArray: [],
      passArray: [],
      activePlayer: 0,
      gameOn: true,
      showStartScreen: false,
    });
  };

  render() {
    return (
      <>
        <h1 className="title">Blackjack</h1>
        <div className="wrapper" id="wrapper">
          {this.state.showStartScreen ? (
            <StartScreen
              playersCount={this.state.playersCount}
              players={this.state.players}
              changed={this.updatePlayersCount}
              updated={this.updatePlayersNames}
              clicked={this.handleStartNewGame}
            />
          ) : (
            <GameTable
              playersCount={this.state.playersCount}
              players={this.state.players}
              activePlayer={this.state.activePlayer}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
