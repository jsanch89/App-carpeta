import React, { useState, useEffect } from 'react';
import IDValidation from '../../component/forms/IdValidation';
import RegisterForm from '../../component/forms/RegisterForm';
const UserRegister = () => {

  const [isValidate, setIsValidated] = useState(false);
  const [idNumber, setIdNumber] = useState(undefined);

  const validateDocument = (event) => {
    event.preventDefault();
    setIdNumber(event.target[0].value)
  }

  useEffect(() => {
    async function validationFetch () {
      if (idNumber) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://govcarpetaapp.mybluemix.net/apis/validateCitizen/${idNumber}`);
        setIsValidated(response.status === 204);
        console.log(response);
      }
    };
    validationFetch();
  }, [idNumber]);

  return (
    <div>
      <h1>Registration form</h1>
      <h3>Start your registration</h3>
      {idNumber && isValidate ? <RegisterForm idNumber={idNumber} /> : <IDValidation submitFunction={validateDocument.bind(this)} />}
    </div >
  );
}

//export default File;

export default UserRegister;