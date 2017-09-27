const db = require('../')

const Campus = db.define('campus', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: db.Sequelize.STRING
  }
})

module.exports = Campus;
