import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, fetchStudents } from '../reducers';
import { Link } from 'react-router-dom';
import CampusForm from './CampusForm'
import store from '../store';
import axios from 'axios';

const mapStateToProps = function({ campuses, students }) {
  return {
    campuses
  }
};

const Home = function({ campuses }){
  return (
      <div id="campuses" className="container well">
        <CampusForm />
        <ul className="list-unstyled">
          {campuses.map(campus => {
          return (
            <div key={campus.name} className="col-xs-3">
              <li key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
              </li>
              <div className="pull-right" onClick={(e) => {
                  axios.delete(`/api/campuses/${campus.id}`)
                  .then(()=>{
                    store.dispatch(fetchCampuses())
                    store.dispatch(fetchStudents())
                  })
                  .catch(err=>console.log(err));
                }}>Delete</div>
              <img src={campus.image}
                className="rounded float-left"
                width="150" height="150" />
            </div>
            )
          })}
        </ul>
      </div>
  )
};

export default connect(mapStateToProps)(Home);
