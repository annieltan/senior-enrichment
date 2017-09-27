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
        <ul>
          {campuses.map(campus => {
          return (
            <li key={campus.id}>
            <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
            </li>
            )
          })}
        </ul>
      </div>
  )
};

export default connect(mapStateToProps)(Home);
