import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses, fetchStudents, addStudent } from '../reducers';
import { Link } from 'react-router-dom';
import StudentForm from './StudentForm';

const mapStateToProps = function({ students, campuses }) {
  return {
    students,
    campuses
  }
};

const Student = function({ students, campuses }){
  return (
    <div id="all-students" className="container">
      <StudentForm campuses={campuses} />
      <div className="container col-xs-9 well">
        <h2>Students</h2>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Campus</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map(student=>{
                  return (
                    <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.campus.name}</td>
                    <td><Link to={`/students/{student.id}`}>x</Link></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
    </div>
  )
};

export default connect(mapStateToProps)(Student);
