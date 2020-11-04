import React, { useContext } from 'react';
import { Context } from '../../store/store';

const Login = (props) => {
  const [state, dispatch] = useContext(Context);
  const loginFunction = async (event) => {
    event.preventDefault();
    const body = {
      cedula: event.target["cedula"].value,
      password: event.target["password"].value,
    }
    await fetch("http://localhost:5000/citizens/signin", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: "LOGIN",
          payload: {
            isAuth: true,
            idNumber: event.target["cedula"].value,
          }
        });
        props.history.push("/");
      }
    })
  }

  return (
    <div>
      <h1> Name operator </h1>
      <h3> Welcome </h3>
      <div className="app-form">
        <h1>Login</h1>
        <h4>write email and password</h4>
        <form onSubmit={(event) => loginFunction(event)}>
          <label>Id number</label>
          <input type="text" id="cedula" name="cedula" pattern="[0-9]{10,}" placeholder="0123456789"></input>
          <label>Password </label>
          <input type="password" id="password" name="password" placeholder="********" aria-label="10 digit id"></input>
          <input type="submit" id="app-form-submit-button" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;