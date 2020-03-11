import React, { useContext } from "react";

// REACT COMPONENTS
import Login from "./Login/Login";

const NotAuthenticated = props => {
  return (
    <div className="notauth">
      <Login></Login>
    </div>
  );
};

export default NotAuthenticated;
