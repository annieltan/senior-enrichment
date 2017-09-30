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
    defaultValue: "http://www.youtodesign.com/uploads/allimg/1606/4918.jpg"
  }
})

module.exports = Campus;
