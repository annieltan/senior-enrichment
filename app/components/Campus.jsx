import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, fetchStudents } from '../reducers';
import { Link } from 'react-router-dom';

const mapStateToProps = function({ students }) {
  return {
    students
  }
}

const Campus = function(props){
  const students = props.students
  const campusId = props.match.params.campusId*1;

  return (
    <div id="students-on-campus" className="container well">
      {
        students.filter(student=>{
           return student.campusId == campusId;
        }).map(student=>{
          return <p key={student.id}>{student.name}</p>
        })
      }
    </div>
  )
}

export default connect(mapStateToProps)(Campus);
