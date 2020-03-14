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
          <input placeholder="Days" id="time" name="days" />
          <input placeholder="Hours" id="time" name="hours" />
          <input placeholder="Minutes" id="time" name="minutes" />
        </div>
        <div className="auth__creator-form-add">
          <button type="submit"></button>
        </div>
      </form>
    </>
  );
};

export default Creator;
