import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import "./App.css";

// CONTEXT
import Context from "./context";

// AXIOS
import axios from "axios";
import { Service } from "axios-middleware";

// HISTORY
import history from "./history";

// ROUTER AND HISTORY
import { Router, Route, Link, Redirect } from "react-router-dom";

// REACT COMPONENTS
import Authenticated from "./components/Authenticated/Authenticated";
import NotAuthenticated from "./components/NotAuthenticated/NotAuthenticated";

const App = () => {
  const { persistentHandler } = useContext(Context);

  useEffect(() => {
    persistentHandler();
  }, []);

  return (
    <>
      <Route exact path="/" render={() => <div></div>} />
      <Route exact path="/login" render={props => <NotAuthenticated />} />
      <Route exact path="/main" render={props => <Authenticated />} />
    </>
  );
};

export default App;
