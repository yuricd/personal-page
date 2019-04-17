import React from 'react';
import './Projects.scss'
import presoounao from '../../images/presoounao.jpg';
import customFacebook from '../../images/customize-facebook.png';

export default class Projects extends React.Component {

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
        <div className="projects">
            <h3 className="page-title">
              <span className="page-title__bars">{`<`}</span>Projects<span className="page-title__bars">{` />`}</span>
            </h3>
            <p>Here are some of my projects - published and unpublished.</p>
            <p>Check out my <a href="https://github.com/yuricd" target="_blank" rel="noopener noreferrer">GitHub</a> to see my codes and cool stuff that I've made.</p>

            <div className="list-projects">
              <div className="list-projects__item">
                <div className="list-projects__item__image">
                  <img src={presoounao} alt="" />
                </div>
                <div className="list-projects__item__description">
                  <h4>Preso ou Não?</h4>
                  <p>A web game to choose if a given Brazilian politician is currently arrested or not.</p>
                  <a href="https://presoounao.herokuapp.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt" /> presoounao.herokuapp.com
                  </a>
                </div>
              </div>

              <div className="list-projects__item">
                <div className="list-projects__item__image">
                  <img src="" alt="" />
                </div>
                <div className="list-projects__item__description">
                  <h4>Image Effects</h4>
                  <p>Add 3D, mirroring, sepia tone, color overlay, snowing, etc. effects to pictures.</p>
                </div>
              </div>

              <div className="list-projects__item">
                <div className="list-projects__item__image">
                  <img src={customFacebook} alt="" />
                </div>
                <div className="list-projects__item__description">
                  <h4>Customize Social Networks</h4>
                  <p>A Chrome extension that allows the user to apply themes to the social network (working on Facebook for now).</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}