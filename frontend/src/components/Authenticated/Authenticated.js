import React, { useContext } from "react";

// CONTEXT
import Context from "../../context";

// ROUTER AND HISTORY
import { Router, Route, Link, Redirect } from "react-router-dom";
// import history from ".";

// REACT COMPONENTS
import Timers from "./Timers/Timers";

const Authenticated = props => {
  const { user, logoutHandler } = useContext(Context);
  return (
    <div className="auth">
      <div className="auth__user">
        <p>{user.username}</p>
      </div>
      <Timers></Timers>
      <div className="auth__logout">
        <button onClick={logoutHandler}>LOGOUT</button>
      </div>
    </div>
  );
};

export default Authenticated;
