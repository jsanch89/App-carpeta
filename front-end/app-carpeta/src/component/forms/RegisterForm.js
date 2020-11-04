import React from 'react';

const RegisterForm = (props) => {

  return (
    <div className="app-form">
      <h1>Registration</h1>
      <h4>Write your personal info</h4>
      <form onSubmit={(event) => props.submitFunction(event)}>
        <label>ID number </label>
        <input type="id" id="id_number_registration" name="id_number" value={props.idNumber} readOnly />
        <label> Email </label>
        <input type="email" id="email_registration" name="email" placeholder="john@domain.com" />
        <label> Name </label>
        <input type="text" id="name_name_registration" name="naame" placeholder="John" />
        <label> Address </label>
        <input type="text" id="address_registration" name="lastName" placeholder="Smith" />
        <label> Password </label>
        <input type="password" id="password_registration" name="password_registration" placeholder="******" />
        <label> Confirm password </label>
        <input type="password" id="confirm_password_registration" name="confirm_password" placeholder="******" />
        <input type="submit" id="app-form-submit-button" value="Register" />
      </form>
    </div>
  );
}

export default RegisterForm;