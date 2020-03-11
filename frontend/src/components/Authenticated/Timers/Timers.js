import React from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// REACT COMPONENTS
import Timer from "./Timer/Timer";

const Timers = () => {
  const timers = useSelector(state => state.timerReducer);
  console.log(timers);

  const timer = timers.map(timer => {
    return <Timer description={timer.description} key={timer._id} />;
  });

  return <>{timer}</>;
};

export default Timers;
