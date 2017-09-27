import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { fetchCampuses, fetchStudents } from '../reducers';
import Campus from './Campus';
import Student from './Student';
import Home from './Home';
import store from '../store';

export default class Routes extends Component {
  componentDidMount(){
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

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
            <Route exact path="/" component = { Home } />
            <Route path="/campuses/:campusId" component = { Campus } />
            <Route exact path="/students" component = { Student } />
          </Switch>
        </div>
      </Router>
    )
  }
}
