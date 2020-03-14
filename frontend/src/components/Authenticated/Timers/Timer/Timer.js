import React from "react";

// AXIOS
import axios from "axios";

const Timer = props => {
  return (
    <div className="auth__timer-content">
      <div className="auth__timer-content__info">
        <p>{props.description}</p>
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
