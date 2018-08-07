const Sequelize = require('sequelize')
const db = require('../db')

const Plan = db.define('plan', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM( "active", "completed", "almost at the peak" ),
    defaultValue: "active"
  },
  targetHours: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  currentHours: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  startedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  completedAt: {
    type: Sequelize.DATE
  }
})

module.exports = Plan
