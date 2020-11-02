import React from 'react';

const Login = (props) => {
  const loginFunction = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <h1> Name operator </h1>
      <h3> Welcome </h3>
      <div className="app-form">
        <h1>Login</h1>
        <h4>write email and password</h4>
        <form onSubmit={(event) => loginFunction(event)}>
          <label>Email </label>
          <input type="email" id="email" name="email" placeholder="example@domain.com"></input>
          <label>Password </label>
          <input type="password" id="password" name="password" placeholder="********" aria-label="10 digit id"></input>
          <input type="submit" id="app-form-submit-button" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;