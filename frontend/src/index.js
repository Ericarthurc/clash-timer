import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// CONTEXT PROVIDER
import ContextProvider from "./providers/ContextProvider";

// ROUTER AND HISTORY
import { Router } from "react-router-dom";
import history from "./history";

ReactDOM.render(
  <ContextProvider>
    <Router history={history}>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
