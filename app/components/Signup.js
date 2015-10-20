import {Link} from 'react-router';
import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService';

export default class Signup extends React.Component {

  constructor() {
    super()
    this.state = {
      user: '',
      password: '',
      extra: ''
    };
  }

  /*  signup(e) {
    e.preventDefault();
    Auth.signup(this.state.user, this.state.password, this.state.extra)
      .catch(function(err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
      });
  } */

  render() {
    return (

      <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
          <div>

            <h1 className="logo-name"><img className="Header-brandImg" src={'https://res.cloudinary.com/scalegray/image/upload/v1444590367/sg2_qy9raw.png'} width="300" height="200" alt="scalegray"/></h1>

          </div>
          <h3>Register</h3>
          <p>Create account to see it in action.</p>
          <form className="m-t" role="form" action="">
            <div className="form-group">
              <input type="text" valueLink={this.linkState('name')} className="form-control" placeholder="Name" required=""></input>
            </div>
            <div className="form-group">
              <input type="email" valueLink={this.linkState('email')} className="form-control" placeholder="Email" required=""></input>
            </div>
            <div className="form-group">
              <input type="password" valueLink={this.linkState('password')} className="form-control" placeholder="Password" required=""></input>
            </div>
            <div className="form-group">
              <div className="checkbox i-checks">
                <label>
                  <input type="checkbox">
                    <i></i>
                  </input>
                  Agree the terms and policy
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary block full-width m-b">Register</button>

            <p className="text-muted text-center">
              <small>Already have an account?</small>
            </p>

            <a>
              <Link to="/login" className="btn btn-sm btn-white btn-block">Login
              </Link>
            </a>

          </form>
          <p className="m-t">
            <small>scalegray | Monitoring done right © 2015</small>
          </p>
        </div>
      </div>
    );
  }
}

ReactMixin(Signup.prototype, React.addons.LinkedStateMixin);
