import React, { useState, useEffect, useContext } from 'react';
import IDValidation from '../../component/forms/IdValidation';
import RegisterForm from '../../component/forms/RegisterForm';
import { Context } from '../../store/store';
const UserRegister = (props) => {

  const [isValidate, setIsValidated] = useState(false);
  const [idNumber, setIdNumber] = useState(undefined);
  const [state, dispatch] = useContext(Context);

  const validateDocument = (event) => {
    event.preventDefault();
    setIdNumber(event.target[0].value)
  }

  const registerHandlerFunction = async (event) => {
    event.preventDefault();
    if (event.target["password_registration"].value === event.target["confirm_password_registration"].value) {

      const body = {
        id: parseInt(event.target["id_number_registration"].value),
        name: event.target["name_name_registration"].value,
        address: event.target["address_registration"].value,
        email: event.target["email_registration"].value,
        password: event.target["password_registration"].value,
        confirm_password: event.target["confirm_password_registration"].value,
      }

      await fetch("http://localhost:5000/citizens/signup", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        if (response.status === 201) {
          dispatch({
            type: "LOGIN",
            payload: {
              isAuth: true,
              idNumber: parseInt(event.target["id_number_registration"].value),
            }
          });
          props.history.push("/");
        }
      })

    }

  }

  const registerHandler = registerHandlerFunction.bind(this);

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
      {idNumber && isValidate ? <RegisterForm submitFunction={registerHandler} idNumber={idNumber} /> : <IDValidation submitFunction={validateDocument.bind(this)} />}
    </div >
  );
}

//export default File;

export default UserRegister;