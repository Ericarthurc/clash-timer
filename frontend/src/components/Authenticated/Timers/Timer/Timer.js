import React from "react";

// AXIOS
import axios from "axios";

const Timer = props => {
  return (
    <div className="auth__timer-content">
      <div className="auth__timer-content__info">
        <div className="content__info-base">
          <p>Base:</p>
          <p>{props.base}</p>
        </div>
        <div className="content__info-time">
          <p>Time Left:</p>
          <p>{props.time.days}:</p>
          <p>{props.time.hours}:</p>
          <p>{props.time.minutes}</p>
        </div>
      </div>
      <div
        className="auth__timer-content__close"
        onClick={() => props.deleteHandler(props._id)}
      >
        {/* SVG HERE */}
      </div>
    </div>
  );
};

export default Timer;
