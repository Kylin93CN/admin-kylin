import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import Main from './Layout/Main';
import Login from './Pages/Login';

const Routes = () => {
  console.log('');
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
