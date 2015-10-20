
import request from 'reqwest';
import {LOGIN_URL, SIGNUP_URL} from '../constants/Constants';
import when from 'when';
import LoginActions from '../actions/LoginActions';

/*
 * AuthService talks to the server to get jwt and authenticates the user - invokes LoginAction
 */

class AuthService {

  login(username, password) {
      return this.handleAuth(when(request({
        url: LOGIN_URL,
        method: 'POST',
        crossOrigin: true,
        type: 'json',
        data: {
          username,
          password
        }
      })));
    }

    logout() {
      LoginActions.logoutUser();
    }

    signup(username, password, extra) {
      return this.handleAuth(when(request({
        url: SIGNUP_URL,
        method: 'POST',
        crossOrigin: true,
        type: 'json',
        data: {
          username, password, extra
        }
      })));
    }

    handleAuth(loginPromise) {
      return loginPromise
        .then(function(response) {
          console.log("inside--> calling loginaction--");
          var jwt = response.token;
          LoginActions.loginUser(jwt);
          return true;
        });
    }

}

export default new AuthService()
