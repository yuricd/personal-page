import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.scss'

export default class Menu extends React.Component {

  state = {
    showMenu: false
  }

  handleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }))
  }

  render() {
    const { showMenu } = this.state;
    return (
      <>
        <div className="full-menu">
          <nav className="menu">
            <ul>
              <li>
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact to="/about">About</NavLink>
              </li>
              <li>
                <NavLink exact to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink exact to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mobile-menu">
          <div className="mobile-menu__menu-icon">
            <button onClick={this.handleMenu}>
              {(!showMenu) ? (
                <i className="fas fa-bars" />
              ) : (
                <i className="fas fa-times" />
              )}
            </button>
          </div>

          {(showMenu) && (
            <nav className="mobile-menu__navigation fadein">
              <ul>
                <li>
                  <NavLink onClick={this.handleMenu} exact to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink onClick={this.handleMenu} exact to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink onClick={this.handleMenu} exact to="/projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink onClick={this.handleMenu} exact to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </>
    )
  }
}