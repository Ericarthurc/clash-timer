import React, { useContext, useState, useEffect } from "react";

// CONTEXT
import Context from "../../../context";

// AXIOS
import axios from "axios";

// COOKIES
import Cookies from "universal-cookie";

// REACT COMPONENTS
import Timer from "./Timer/Timer";

const Timers = () => {
  const cookies = new Cookies();
  const [timers, setTimers] = useState([]);
  const { user } = useContext(Context);

  const timersHandler = async () => {
    if (cookies.get("loggedIn") == 1) {
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
    }
  };

  useEffect(() => {
    console.log("[USE EFFECT TIMERS]");
    timersHandler();
  }, []);

  const timer = timers.map(timer => {
    return <Timer description={timer.description} key={timer._id} />;
  });

  return <>{timer}</>;
};

export default Timers;
