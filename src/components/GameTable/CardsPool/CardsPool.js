import React from "react";
import cardImage from "../../../images/card-pool.png";

const CardsPool = ({ pullCardFn, activePlayer }) => {
  return (
    <div
      className="game__cards-pool"
      id="cards-pool"
      onClick={() => pullCardFn(activePlayer)}
    >
      <img
        className="game__cards-pool-image"
        src={cardImage}
        alt="Cards pool"
      />
      <img
        className="game__cards-pool-image-lower"
        src={cardImage}
        alt="Cards pool"
      />
    </div>
  );
};

export default CardsPool;
