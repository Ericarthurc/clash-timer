import React, { useContext } from "react";

// CONTEXT
import Context from "../../../context";

const Login = props => {
  const { loginHandler } = useContext(Context);

  const formHandler = event => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    loginHandler(username, password);
  };
  return (
    <>
      <form className="notauth__form" onSubmit={formHandler}>
        <input placeholder="Username" name="username" />
        <input placeholder="Password" name="password" />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
