import React, { Component } from 'react';
import { fetchStudents } from '../reducers';
import store from '../store';
import axios from 'axios';

const DeleteStudent = function({ studentId }){
  return (
    <div id="delete-student">
      <button className="btn btn-outline-secondary btn-sm"
        type="submit" onClick={ (e)=>{
          e.preventDefault();
          console.log('e', e)

          axios.delete(`/api/students/${ studentId }`)
          .then(res=>res.data)
          .then(results => console.log(results));

          store.dispatch(fetchStudents());
          
        } }>Delete</button>
    </div>
  )
};

export default DeleteStudent;
