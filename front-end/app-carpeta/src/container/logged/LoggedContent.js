import React from 'react';
import { Route, Switch } from 'react-router-dom';
import File from '../file/File';
import LoggedNavBar from '../../component/naav-bar/Logged-NavBar';
import Files from '../Files/Files';

const LoggedContent = () => {
  return (
    <div>
      <LoggedNavBar />
      <Switch>
        <Route exact path="/upload" component={File} />
        <Route path="/" component={Files} />
      </Switch>
    </div>
  );
}

export default LoggedContent;