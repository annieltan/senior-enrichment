import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { fetchStudents } from '../reducers';
import axios from 'axios';
import store from '../store';


export default class StudentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      campusId: this.props.campuses[0].id
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(evt){
    this.setState({[evt.target.name]: evt.target.value})
  }
  onSubmit(evt){
    evt.preventDefault();

    axios.post('/api/students/', this.state)
    .then(res => res.data)
    .then(result => {
      console.log(result)
    });

    store.dispatch(fetchStudents());
  }
  render(){
    return (
      <div id="all-students" className="container"
        className="container well col-xs-3">
        <div>
          <h2>Add Student</h2>
          <form onSubmit={ this.onSubmit }>
            <div className="form-group">
              <label>Full Name</label>
              <input
                name="name"
                type="name"
                className="form-control"
                placeholder="Add Name"
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Add Email"
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Campus</label>
              <select value={this.state.campusId} name="campusId" onChange={this.onChange}>
                {
                  this.props.campuses.map(campus=>{
                    return <option key={campus.id} value={campus.id}>{campus.name}</option>
                  })
                }
              </select>
            </div>
            <button type="submit">Add Student</button>
          </form>
        </div>
      </div>
    )
  }
};
