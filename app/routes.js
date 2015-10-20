import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Dash from './components/Dash';
import Login from './components/Login';
import Signup from './components/Signup';



export default  (
  <Route handler={App}>
    <Route name="login" handler={Login}/>
    <Route name="signup" handler={Signup}/>
    <Route name="dash" path="/" handler={Dash}/>
  </Route>
);
