import { combineReducers } from 'redux'
import axios from 'axios';

// INITIAL STATE
const initialState = {
  campuses: [],
  students: []
}

// ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_STUDENTS = 'GET_STUDENTS';

// ACTION CREATORS
export function getCampuses(campuses) {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

export function getStudents(students) {
  return {
    type: GET_STUDENTS,
    students
  }
}

// THUNKS
export function fetchCampuses(){
  return function thunk(dispatch){
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses)
        dispatch(action)
      })
  }
}

export function fetchStudents(){
  return function thunk(dispatch){
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students)
        dispatch(action)
      })
  }
}

// REDUCERS
const reducer = function(state = initialState, action) {
  switch(action.type) {
    case GET_CAMPUSES:
      return Object.assign({}, state, { campuses: action.campuses });

    case GET_STUDENTS:
      return Object.assign({}, state, { students: action.students });

    default:
      return state
  }
};

export default reducer
