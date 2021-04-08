import MembersPage from './pages/Members'
import ProjectPage from './pages/Project'
import HomePage from './pages/Home'
import BootstrapNavbar from './components/Navbar';
import Footer from './components/Footer'
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App () {
  return (
    <Router>
      <BootstrapNavbar/>
      <div className="wrapper">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/members' component={MembersPage} />
          <Route path='/project' component={ProjectPage} />
        </Switch>
      </div>
      <div className="footer-wrapper">
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
