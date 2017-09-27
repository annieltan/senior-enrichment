import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentForm from './StudentForm';
import DeleteStudent from './DeleteStudent';

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
                      <td value={student.id}>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.campus.name}</td>
                      <td><DeleteStudent studentId={ student.id }/></td>
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
