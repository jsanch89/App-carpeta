import React from 'react';
import "./file.css";
const FileInfo = (props) => {
  const file = props.file;
  return (
    <div className={"fileInfo"}>
      <h1>{file.documentTitle}</h1>
      <a href={file.documentURL} target="_blank"> See document </a>
      <button>Validate</button>
    </div>
  );
}

export default FileInfo;