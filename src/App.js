import MembersPage from './pages/Members'
import ProjectPage from './pages/Project'
import BootstrapNavbar from './components/Navbar';
import './css/App.css'
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App () {
    return (
        <Router>
            <BootstrapNavbar/>
            <Switch>
                <Route exact path='/' component={MembersPage} />
                <Route path='/members' component={MembersPage} />
                <Route path='/project' component={ProjectPage} />
            </Switch>
        </Router>
    )
}

export default App;
