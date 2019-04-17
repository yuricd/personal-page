import React from 'react';
import { Social } from '../Social/Social';
import './Home.scss'

export default class Home extends React.Component {

  state = {
    isLoading: true
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    return (
      <div className="container fadein">
        <div className="home">
          <h1 className="home__title">A Creative and Minimalist Dev</h1>
          <h2 className="home__subtitle">Making a prettier and cleaner web</h2>
          <Social />
        </div>
      </div>
    )
  }
}