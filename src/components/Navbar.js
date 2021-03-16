import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export function NavbarEpita () {
    return (
        <nav className="navbar-epita">
            <div className="navbar left">
                <img id="logo" src="images/artpad.png" alt=""/>
                <ul id="pages">
                    <li><Link to={'/projet'}>Le projet</Link></li>
                    <li><Link to={'/members'}>Les membres</Link></li>
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
            <Link to={'/'} className="navbar-brand">
                <img src="images/artpad.png" width="60" height="60" alt="artpad-logo"></img>
                Artpad
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-tag=".comnavbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ul-auto">
                    <Link to={'/'} className="nav-item nav-link active">Home</Link>
                    <Link to={'/project'} className="nav-item nav-link">Le projet</Link>
                    <Link to={'/members'} className="nav-item nav-link">Les membres</Link>
                </div>
            </div>
        </nav>
   ) 
}