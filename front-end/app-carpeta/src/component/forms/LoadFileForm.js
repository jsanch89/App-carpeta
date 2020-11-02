import React from 'react';

const LoadFile = (props) => {
  return (
    <div className="app-form">
      <h1>Load a file</h1>
      <h4>Fill the followings information and load your file</h4>
      <form>
        <label>File name</label>
        <input type="text" id="fileName" name="fileName"></input>
        <label>File </label>
        <input type="file" id="file" name="file" accept="pdf"></input>
      </form>
    </div>
  );
}

export default LoadFile;