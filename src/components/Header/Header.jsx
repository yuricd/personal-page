import React from 'react';
import logo from '../../images/logo.png';
import './Header.scss'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </header>
    )
  }
}