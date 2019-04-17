import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

export const Routes = () => {
  return (
    <>
      <Route exact path={'/'} component={Home}/>
      <Route path={`/about`} component={About}/>
      <Route path={`/projects`} component={Projects}/>
      <Route path={`/contact`} component={Contact}/>
    </>
  )
}