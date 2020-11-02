import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import UserRegister from '../../container/user-resgister/UserResgiter';
import File from '../../container/file/File';
import NavBar from '../naav-bar/NavBar';
import Login from '../../container/login/Login';

function App () {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/register" component={UserRegister} />
        <Route path="/file" component={File} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
