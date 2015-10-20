import React from 'react';
import Router from 'react-router';
import routes from './routes';
import RouterContainer from './services/RouterContainer'
import {Route, HistoryLocation} from 'react-router';




var router = Router.create({
  routes: routes,
  location: HistoryLocation
});
RouterContainer.set(router);



router.run(function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
