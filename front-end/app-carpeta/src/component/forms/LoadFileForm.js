import React from 'react';
import ReactFileReader from 'react-file-reader';


const LoadFile = (props) => {
  return (
    <div className="app-form">
      <h1>Load a file</h1>
      <h4>Fill the followings information and load your file</h4>
      <form onSubmit={(event) => props.submitHandler(event)}>
        <label>File name</label>
        <input type="text" id="fileName" name="fileName"></input>
        <label>File </label>
        <input type="file" id="file" accept="application/pdf" name="file"></input>
        <input type="submit" id="app-form-submit-button" value="Upload" />
      </form>
    </div>
  );
}

export default LoadFile;