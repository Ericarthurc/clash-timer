import React, { useState } from "react";
import Context from "../context";

// AXIOS
import axios from "axios";
import { Service } from "axios-middleware";

// HISTORY
import history from "../history";

const ContextProvider = props => {
  // AXIOS MIDDLEWARE FOR TESTING
  const service = new Service(axios);

  service.register({
    onRequest(config) {
      console.log("onRequest", config);
      return config;
    },
    onSync(promise) {
      console.log("onSync", promise);
      return promise;
    },
    onResponse(response) {
      console.log("onResponse", response);
      return response;
    }
  });

  // STATE
  const [user, setUser] = useState("");

  // ACTIONS
  const persistentHandler = async () => {
    console.log("[PERSISTENT]");
    try {
      const user = await axios.get("/api/v1/users/me", {
        credentials: "include"
      });
      console.log("[USER]", user);

      setUser(user.data.user);
      history.push("/main");
    } catch (error) {
      history.push("/login");
      console.log(error);
    }
  };

  const loginHandler = async (username, password) => {
    try {
      const user = await axios.post("/api/v1/users/login", {
        username,
        password
      });
      setUser(user.data.user);
      // localStorage.setItem("jwt", user.data.token);
      history.push("/main");
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = async () => {
    try {
      await axios.get("/api/v1/users/logout", {
        credentials: "include"
      });
      setUser("");
      history.push("/login");
    } catch (error) {}
  };

  return (
    <Context.Provider
      value={{ user, persistentHandler, loginHandler, logoutHandler }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
