import React from 'react';

const RegisterForm = (props) => {
  console.log(props.idNumber)
  return (
    <div className="app-form">
      <h1>Registration</h1>
      <h4>Write your personal info</h4>
      <form onSubmit={(event) => props.submitFunction(event)}>
        <label>ID number </label>
        <input type="id" id="id_number" name="id_number" value={props.idNumber} readOnly />
        <label> Email </label>
        <input type="email" id="id_number" name="id_number" placeholder="john@domain.com" />
        <label> FirstName </label>
        <input type="text" id="firstName" name="firstName" placeholder="John" />
        <label> LastName </label>
        <input type="text" id="lastName" name="lastName" placeholder="Smith" />
        <label> Password </label>
        <input type="password" id="id_number" name="id_number" placeholder="******" />
      </form>
    </div>
  );
}

export default RegisterForm;