import React, { Component } from 'react';
import { fetchCampuses } from '../reducers';
import axios from 'axios';
import store from '../store';

export default class StudentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      image: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(evt){
    this.setState({[evt.target.name]: evt.target.value})
  }
  onSubmit(evt){
    evt.preventDefault();

    axios.post('/api/campuses/', this.state)
    .then(res => res.data)
    .then(() =>{
      store.dispatch(fetchCampuses())
    })
    .catch(err => console.log(err));

  }
  render(){
    return (
      <div id="all-campuses" className="container"
        className="container col-xs-3">
        <div>
          <h2>Add Campus</h2>
          <form onSubmit={ this.onSubmit }>
            <div className="form-group">
              <label>Campus Name</label>
              <input
                name="name"
                type="name"
                className="form-control"
                placeholder="Add Name"
                onChange={ this.onChange }
                required
              />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input
                name="image"
                type="link"
                className="form-control"
                placeholder="Add Image"
                onChange={ this.onChange }
              />
            </div>
            <button className="btn btn-outline-secondary btn-sm"
              type="submit">Add Campus</button>
          </form>
        </div>
      </div>
    )
  }
};
