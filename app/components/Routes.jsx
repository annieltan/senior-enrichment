import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Campus from './Campus';
import Student from './Student';
import Main from './Main';
import Home from './Home';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div id="routes">
          <nav className="navbar navbar-default">
            <div className="container pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/students" activeClassName="active">Students</NavLink>
                  </li>
                </ul>
            </div>
          </nav>

        <div id="heading" className="container well">
          <h1>Columbia University</h1>
        </div>

          <Switch>
            <Route exact path="/" component = { Main } />
            <Route path="/campuses/:campusId" component = { Campus } />
            <Route exact path="/students" component = { Student } />
          </Switch>
        </div>
      </Router>
    )
  }
}
