import React from 'react';
import Router from 'react-router';
//import routes from './routes';
import RouterContainer from './services/RouterContainer'
import {Route, HistoryLocation} from 'react-router';
import App from './components/App';
import Dash from './components/Dash';
import Login from './components/Login';

var routes = (
  <Route handler={App}>
    <Route name="login" handler={Login}/>
    <Route name="dash" path="/" handler={Dash}/>
  </Route>
);


var router = Router.create({
  routes: routes,
  location: HistoryLocation
});
RouterContainer.set(router);



router.run(function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
