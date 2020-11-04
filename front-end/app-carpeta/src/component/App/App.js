import React, { useContext } from 'react';
import './App.css';
import PubliContent from '../../container/public/PublicRoute';
import LoggedContent from '../../container/logged/LoggedContent';
import { Context } from '../../store/store';

function App () {
  const [state, dispatch] = useContext(Context);
  return (
    <div className="App">
      {state.isAuth ? <LoggedContent /> : <PubliContent />}
    </div>
  );
}

export default App;
