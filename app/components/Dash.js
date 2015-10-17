
import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent'

export default AuthenticatedComponent(class Dash extends React.Component {
  render() {
    return (<h1>Hello user!!</h1>);
  }
});
