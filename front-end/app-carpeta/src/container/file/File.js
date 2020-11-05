import React, { useContext } from 'react';
import LoadFile from '../../component/forms/LoadFileForm';
import { Context } from '../../store/store';

const reader = new FileReader();

const File = () => {

  const [state, dispatch] = useContext(Context);

  const submitFileHandlerFunction = async (event) => {
    event.preventDefault();
    //console.log(event.target["file"].value);
    console.log(reader.readAsDataURL(event.target["file"].value, "UTF-8").path)

    const body = {
      file: event.target["file"].value,
      name: event.target["fileName"].value,
      cedula: state.idNumber,
    }

    await fetch("http://localhost:5001/document/uploadDocument", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      console.log(response);
    });
  }

  const submitFileHandler = submitFileHandlerFunction.bind(this);

  return (
    <div>
      <h1> LoadFile </h1>
      <h4> Select a file </h4>
      <LoadFile submitHandler={submitFileHandler} />
    </div>
  );
}

export default File;
