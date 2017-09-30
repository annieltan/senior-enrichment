'use strict'

const router = require('express').Router();
const Campus = require('../db/models/Campus');
//const Student = require('../db/models/Student');

router.get('/', (req, res, next)=>{
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next)
});

router.get('/:campusId', (req, res, next)=>{
  const campusId = req.params.campusId*1;

  Campus.findById(campusId)
    .then(campus => res.json(campus))
    .catch(next)
});

router.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next)
})

router.delete('/:campusId', (req, res, next) => {
  const campusId = req.params.campusId*1;

  Campus.destroy({where: {id: campusId}})
    .then(() => res.status(204).end())
    .catch(next)
})

module.exports = router;
