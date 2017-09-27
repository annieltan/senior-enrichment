const db = require('../')

const Student = db.define('student', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false,
      isEmail: true
    }
  }
})

module.exports = Student;
