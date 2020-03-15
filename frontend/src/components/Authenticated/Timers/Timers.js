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
import Creator from "./Creator/Creator";

const Timers = () => {
  const cookies = new Cookies();
  const [timers, setTimers] = useState([]);

  // GET Timers on startup
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

  // CREATE Timer
  const createHandler = async event => {
    event.preventDefault();
    const base = event.target.base.value;

    const days = event.target.days.value * 86400000;
    const hours = event.target.hours.value * 3600000;
    const minutes = event.target.minutes.value * 60000;

    const currentTime = Date.now();
    const time = currentTime + days + hours + minutes;

    try {
      await axios.post(
        `/api/v1/timers`,
        {
          base,
          time
        },
        {
          credentials: "include"
        }
      );
      // GRABS NEW ARRAY AFTER CREATION
      timersHandler();
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE Timer
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
    const remaining = new Date(timer.time).getTime();
    const distance = remaining - new Date().getTime();
    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    const seconds = Math.floor((distance % 60000) / 1000);

    return (
      <Timer
        base={timer.base}
        time={distance}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        deleteHandler={deleteHandler}
        _id={timer._id}
        key={timer._id}
      />
    );
  });

  const sortedArray = timer.sort(timer => {});

  return (
    <>
      {timers == "" ? null : <div className="auth__timer">{timer}</div>}
      <div className="auth__creator">
        <Creator creator={createHandler}></Creator>
      </div>
    </>
  );
};

export default Timers;
