import React, { useContext } from "react";

// CONTEXT
import Context from "../../context";

// ROUTER AND HISTORY
import { Router, Route, Link, Redirect } from "react-router-dom";
// import history from ".";

// REACT COMPONENTS
import Logout from "./Logout/Logout";
import Timers from "./Timers/Timers";

const Authenticated = props => {
  const { user, logoutHandler } = useContext(Context);
  return (
    <>
      <Logout></Logout>
      <p>{user.username}</p>
      <button onClick={logoutHandler}>LOGOUT</button>
      {/* <Timers></Timers> */}
    </>
  );
};

export default Authenticated;
