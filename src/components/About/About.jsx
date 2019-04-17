import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.scss'

export default class About extends React.Component {

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
        <div className="ordinary">
          <div className="ordinary__l" />
          <div className="ordinary__r">
            <h3 className="page-title">
              <span className="page-title__bars">{`//`}</span>About Me
            </h3>
            <div className="text">
              <p>Hi, my name is Yuri Delgado and I'm a Brazilian web developer.</p>
              <p>I was born in Guarulhos, SP, and I'm currently living in Campinas, SP.</p>
              <p>I started making little web pages when I was about eight years old at school. During my high school I've done some jobs for an advertisement agency as web developer. At the same time I was taking a web design course.</p>

              <p>In 2012 I finished the computer technician course and, right after finishing high school, I was accepted in State University of Campinas (Unicamp), in 2014, when I started my Computer Science Bachelor's degree. During the undergraduation I worked as a freelancer web dev and on the second year I was hired to work in an intelligence and technology company, also as web dev.</p>

              <p>Nowadays, I work as full stack web developer. I like to plan, mock and build responsives UIs too.</p>

              <p>If you want to check out my detailed resumé, please, <NavLink to="/contact">send me a message</NavLink>, and I will forward it to you. :)</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}