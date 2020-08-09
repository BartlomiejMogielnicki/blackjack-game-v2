import React from "react";
import "./MainButton.scss";

const MainButton = (props) => {
  return (
    <button
      className="start-screen__info-control-button"
      id="btn-start"
      onClick={props.clicked}
    >
      Start
    </button>
  );
};

export default MainButton;
