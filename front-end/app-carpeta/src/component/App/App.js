import React, { useState } from 'react';
import './App.css';
import PubliContent from '../../container/public/PublicRoute';
import LoggedContent from '../../container/logged/LoggedContent';

function App () {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <div className="App">
      {isLogged ? <LoggedContent /> : <PubliContent />}
    </div>
  );
}

export default App;
