'use strict'

const router = require('express').Router();
const Student = require('../db/models/Student');
const Campus = require('../db/models/Campus');

router.get('/', (req, res, next)=>{
  Student.findAll({
    include: [Campus]
  })
  .then(students => res.json(students))
  .catch(next)
})

router.get('/:studentId', (req, res, next)=>{
  const studentId = req.params.studentId*1;

  Student.findById(studentId)
    .then(student => res.json(student))
    .catch(next)
});

router.post('/', (req, res, next) => {
  console.log('REQBODY', req.body)
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next)
})

router.delete('/:studentId', (req, res, next) => {
  const studentId = req.params.studentId*1;

  Student.destroy(studentId)
    .then(() => res.status(204).end())
    .catch(next)
})

module.exports = router;
