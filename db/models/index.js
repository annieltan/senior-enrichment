'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

// This is also probably a good place for you to set up your associations

const db = require('../index');
const Student = require('./Student');
const Campus = require('./Campus');

const cc_image = "http://columbiasc.edu/app/uploads/CC_Logos/CC_Web_logo_stacked.jpg"
const seas_image = "http://engineering.columbia.edu/files/engineering/logo-hammers600.jpg"

Student.belongsTo(Campus, { onDelete: 'cascade', hooks: true });
//Campus.hasMany(Student, { onDelete: 'cascade', hooks: true })

var seed = function(){
  return Promise.all([
    Student.create({ name: "Sophia", email: "sophia@columbia.edu"}),
    Student.create({ name: "Adam", email: "adam@columbia.edu"}),
    Student.create({ name: "Jill", email: "jill@columbia.edu" }),
    Student.create({ name: "Sean", email: "sean@columbia.edu" }),
    Campus.create({ name: "Columbia SEAS", image: seas_image }),
    Campus.create({ name: "Columbia College", image: cc_image })
  ])
  .then(([_sophia, _adam, _jill, _sean, _seas, _college])=>{
    _sophia.campusId = _seas.id;
    _adam.campusId = _seas.id;
    _jill.campusId = _college.id;
    _sean.campusId = _college.id;
    _sophia.save();
    _adam.save();
    _jill.save();
    _sean.save();
  })
}


module.exports = seed;
