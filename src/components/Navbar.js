import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub } from '@fortawesome/free-brands-svg-icons';

export function NavbarEpita () {
    return (
        <nav className="navbar-epita">
            <div className="navbar left">
                <img id="logo" src="images/artpad.png" alt=""/>
                <ul id="pages">
                    <li><a href="github.com">Le projet</a></li>
                    <li><a href="github.com">Les membres</a></li>
                </ul>
            </div>
            <ul className="navbar navlinks">
                <li>
                    <a href id="github"><FontAwesomeIcon icon={faGithub}/></a>
                </li>
                <li>
                    <a href id="epita"> epita </a>
                </li>
            </ul>
        </nav>
    )
}

export default function BootstrapNavbar () {
   return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="github.com">
                <img src="images/artpad.png" width="60" height="60" alt="artpad-logo"></img>
                Artpad
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-tag=".comnavbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ul-auto">
                    <a className="nav-item nav-link active" href="github.com">Home</a>
                    <a className="nav-item nav-link" href="github.com">Le projet</a>
                    <a className="nav-item nav-link" href="github.com">Les membres</a>
                </div>
            </div>
        </nav>
   ) 
}