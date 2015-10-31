import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/Constants.js';
import RouterContainer from '../services/RouterContainer'

export default {
  loginUser: (jwt) => {
  //var savedJwt = localStorage.getItem('jwt');

   AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt
    });

    //if (savedJwt != jwt) {
      var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';
      console.log(nextPath);
      RouterContainer.get().transitionTo(nextPath);
      localStorage.setItem('jwt', jwt);
    //}
  },
  logoutUser: () => {
    RouterContainer.get().transitionTo('/login');
    localStorage.removeItem('jwt');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}
