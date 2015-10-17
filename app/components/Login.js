import React,{ PropTypes } from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService'



export default class Login extends React.Component {

  constructor() {
    super()
      this.state = {
        email: '',
        password: ''
      };
    }


handleSubmit(event) {

  event.preventDefault();
console.log(this.state.email);
console.log(this.state.password);
Auth.login(this.state.email, this.state.password)
.catch(function(err) {
  console.log("error in logging-in");
});
}


    render() {
    return (
      <div className="middle-box text-center loginscreen  animated fadeInDown">
            <div>
              <div>
                <h1 className="logo-name"><img className="Header-brandImg" src={'https://res.cloudinary.com/scalegray/image/upload/v1444590367/sg2_qy9raw.png'} width="300" height="200" alt="React" /></h1>
              </div>

              <p>Login in. To see it in action.</p>
              <form className="m-t" role="form" action="#">
                <div className="form-group">
                  <input valueLink={this.linkState('email')} className="form-control" placeholder="Username" required />
                </div>
                <div className="form-group">
                  <input valueLink={this.linkState('password')} className="form-control" placeholder="Password" required />
                </div>
                <button type="submit" onClick={this.handleSubmit.bind(this)} className="btn btn-primary block full-width m-b">Login</button>
                <a ui-sref="forgot_password"><small>Forgot password?</small></a>
                <p className="text-muted text-center"><small>Do not have an account?</small></p>
                <a className="btn btn-sm btn-white btn-block" ui-sref="register">Create an account</a>
              </form>
              <p className="m-t"> <small>scalegray | Monitoring done right © 2015</small> </p>
            </div>
          </div>

    );
  }
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
