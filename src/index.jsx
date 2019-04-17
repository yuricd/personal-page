import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import './styles/_default.scss';
import { Smoke } from '../src/components/Smoke/Smoke';

const App = () => {
  return (
    <>
      <Header />
      <Smoke />
      <Routes />
      <Menu />
    </>
  )
}

ReactDOM.render(<Router basename={process.env.PUBLIC_URL + '/'}><App /></ Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
