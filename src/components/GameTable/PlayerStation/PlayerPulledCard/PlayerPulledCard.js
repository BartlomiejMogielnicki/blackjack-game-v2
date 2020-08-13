import React from "react";
import cardBackImage from "../../../../images/card-pool.png";

const PlayerPulledCard = ({ cardValue, cardSuit, cardImage }) => {
  return (
    <div className="game__player-cards-card">
      <div className="game__player-cards-card-inner">
        <div className="game__player-cards-card-inner-front">
          <img
            className="game__player-cards-card-inner-front-image"
            src={cardBackImage}
            alt="card-back"
          />
        </div>
        <div className="game__player-cards-card-inner-back">
          <img
            className="game__player-cards-card-inner-back-image"
            src={cardImage}
            alt={`${cardSuit}, ${cardValue}`}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerPulledCard;
