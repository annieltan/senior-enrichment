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
    type: db.Sequelize.STRING,
    defaultValue: "http://columbiasc.edu/app/uploads/CC_Logos/CC_Web_logo_stacked.jpg"
  }
})

module.exports = Campus;
