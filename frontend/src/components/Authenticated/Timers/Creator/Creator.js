import React from "react";

const Creator = props => {
  return (
    <>
      <form className="auth__creator-form" onSubmit={props.creator}>
        <div className="auth__creator-form-input__base">
          <div className="auth__creator-form-input__base-label">
            <label htmlFor="base">Base:</label>
          </div>
          <input id="base" name="base" />
        </div>
        <div className="auth__creator-form-input__time">
          <div className="auth__creator-form-input__time-label">
            <label htmlFor="time">Time Left:</label>
          </div>
          <input
            className="time-label-days"
            placeholder="Days"
            id="time"
            name="days"
            type="Number"
          />
          <input
            className="time-label-hours"
            placeholder="Hours"
            id="time"
            name="hours"
            type="Number"
          />
          <input
            className="time-label-minutes"
            placeholder="Minutes"
            id="time"
            name="minutes"
            type="Number"
          />
        </div>
        <div className="auth__creator-form-add">
          <button type="submit"></button>
        </div>
      </form>
    </>
  );
};

export default Creator;
