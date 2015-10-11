
import React,{ PropTypes } from 'react';
import ImageLoader from 'react-imageloader';



class Login extends React.Component {




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
                  <input type="email" className="form-control" placeholder="Username" required />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-primary block full-width m-b">Login</button>
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

export default Login;
