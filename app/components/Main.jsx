import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, fetchStudents } from '../reducers';
import Home from './Home';
import store from '../store';

export default class Main extends Component {
  componentDidMount(){
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

  render (props){
    return (
      <div id="home">
          <Home />
      </div>
    )
  }
}
