import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../store/store';
import FileInfo from '../../component/fileInfo/FileInfo';

const Files = () => {

  const [state, dispatch] = useContext(Context);

  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function validationFetch () {
      if (state.idNumber) {
        const response = await fetch(`http://localhost:5001/document/retrieveDocuments/${state.idNumber}`);
        setFiles(await response.json());
      }
    };
    validationFetch();
  });

  return (
    <div>
      <h1> Files loaded </h1>
      <h4> Select a file and validate </h4>
      {files.map((file) => <FileInfo file={file} />)}
    </div>
  );
}

export default Files;
