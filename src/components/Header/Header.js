
import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header extends Component {

  render() {
    return (
    <div> <h1>scalegray dashboard</h1>
      </div>
    );
  }

}

export default Header;
