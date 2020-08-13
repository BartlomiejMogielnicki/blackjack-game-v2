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
        cardsArr: [],
        status: "In game",
      },
    ],
    lostArray: [],
    passArray: [],
  };

  checkScore = () => {
    console.log("Score checked!");
  };

  componentDidUpdate() {
    this.checkScore();
  }

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
          cardsArr: [],
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

  // Pull one card from deck
  pullOneCard = async (activePlayer) => {
    fetch(
      `https://deckofcardsapi.com/api/deck/${this.state.cardsDeckId}/draw/?count=1`
    )
      .then((response) => response.json())
      .then((data) => {
        // Set points value for specific cards
        let points = data.cards[0].value;
        switch (points) {
          case "ACE":
            points = 11;
            break;
          case "KING":
            points = 4;
            break;
          case "QUEEN":
            points = 3;
            break;
          case "JACK":
            points = 2;
            break;
          default:
            points = parseInt(data.cards[0].value);
        }
        // Update player score and cards
        const players = [...this.state.players];
        players[activePlayer].score += points;
        players[activePlayer].cardsNum++;
        players[activePlayer].cardsArr.push({
          cardValue: data.cards[0].value,
          cardSuit: data.cards[0].suit,
          cardImage: data.cards[0].image,
        });
        this.setState({
          players,
        });
      });
  };

  // Pull two starting cards
  pullStartCards = () => {
    // Check if player has no cards and game is not finished
    if (this.state.players[this.state.activePlayer].cardsNum === 0) {
      // Pull first card
      this.pullOneCard(this.state.activePlayer);
      // Pull second card with delay
      setTimeout(() => {
        this.pullOneCard(this.state.activePlayer);
      }, 800);
    }
  };

  handleStartNewGame = async () => {
    this.addCroupierIfNeeded();

    // Get new cards deck ID
    const cardsDeckId = await this.getNewCardsDeck();
    this.setState({
      cardsDeckId,
    });

    // Restart data
    this.setState({
      lostArray: [],
      passArray: [],
      activePlayer: 0,
      gameOn: true,
      showStartScreen: false,
    });

    this.pullStartCards();
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
              pullCardFn={this.pullOneCard}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
