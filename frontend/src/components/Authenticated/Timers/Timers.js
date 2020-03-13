import React, { useContext, useState, useEffect } from "react";

// CONTEXT
import Context from "../../../context";

// AXIOS
import axios from "axios";

// COOKIES
import Cookies from "universal-cookie";

// HISTORY
import history from "../../../history";

// REACT COMPONENTS
import Timer from "./Timer/Timer";

const Timers = () => {
  const cookies = new Cookies();
  const [timers, setTimers] = useState([]);

  const timersHandler = async () => {
    if (cookies.get("loggedIn") === "1") {
      try {
        const data = await axios.get("/api/v1/timers", {
          credentials: "include"
        });
        console.log("[WEHA]", data.data.data);
        setTimers(data.data.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      // maybe to push to error?
      // will push back to login even if good cookie is present
      history.push("/login");
    }
  };

  const deleteHandler = async _id => {
    try {
      await axios.delete(`/api/v1/timers/${_id}`, {
        credentials: "include"
      });
      // GRABS NEW ARRAY AFTER DELETION
      timersHandler();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("[USE EFFECT TIMERS]");
    timersHandler();
  }, []);

  const timer = timers.map(timer => {
    return (
      <Timer
        description={timer.description}
        deleteHandler={deleteHandler}
        _id={timer._id}
        key={timer._id}
      />
    );
  });

  return <div className="auth__timer">{timer}</div>;
};

export default Timers;
