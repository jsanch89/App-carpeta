import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserRegister from '../user-resgister/UserResgiter';
import NavBar from '../../component/naav-bar/NavBar';
import Login from '../../container/login/Login';

const PubliContent = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/register" component={UserRegister} />
        <Route path="/" component={Login} />
      </Switch>
    </div >
  );
}

export default PubliContent;