import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, fetchStudents } from '../reducers';
import { Link } from 'react-router-dom';

import store from '../store';

const mapStateToProps = function({ campuses, students }) {
  return {
    campuses
  }
};

const Home = function({ campuses }){
  return (
      <div id="campuses" className="container well">
        <ul className="list-unstyled">
          {campuses.map(campus => {
          return (
            <div key={campus.name} className="col-xs-6">
              <li key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
              </li>
              <img src={campus.image}
                className="rounded float-left"
                width="200" height="200" />
            </div>
            )
          })}
        </ul>
      </div>
  )
};

export default connect(mapStateToProps)(Home);
