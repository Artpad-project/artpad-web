import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import {  faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer (props) {
  return (
    <>
      <div className="footer footer-wrapper">
        <div className="footer navlinks">
          <a className="footer link" href="https://github.com/Artpad-project/artpad" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a className="footer link" href="https://www.epita.fr/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGraduationCap}/>
          </a>
        </div>
        <h1 id="license">©EPITA 2021</h1>
      </div>
    </>
  )
}