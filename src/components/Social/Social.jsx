import './Social.scss'
import React from 'react';

export const Social = () => {
  return (
    <div className="social">
      <ul>
        <li>
          <a href="https://www.facebook.com/yuricdelgado" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yuri-delgado-23059499/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
        <li>
          <a href="https://github.com/yuricd/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </a>
        </li>
      </ul>
    </div>
  )
}