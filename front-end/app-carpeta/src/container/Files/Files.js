import React, { useContext, } from 'react';
import { Context } from '../../store/store';

const Files = () => {

  const [state, dispatch] = useContext(Context);

  let files = [];

  return (
    <div>
      <p>Files user: {state.idNumber}</p>
    </div>
  );
}

export default Files;
