import React from 'react';

const IDValidation = (props) => {
  return (
    <div className="app-form">
      <h1>ID validate</h1>
      <h4>Write and validate your ID number</h4>
      <form onSubmit={(event) => props.submitFunction(event)}>
        <label>ID number </label>
        <input type="text" id="id_number" name="id_number" pattern="[0-9]{5,10}" placeholder="0123456789" aria-label="10 digit id"></input>
        <input type="submit" id="app-form-submit-button" value="Validate" />
      </form>
    </div>
  );
}

export default IDValidation;