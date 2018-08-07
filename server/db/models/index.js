const User = require('./user')
const Plan = require('./plan')


User.hasMany(Plan)
Plan.belongsTo(User)


module.exports = {
  User, Plan
}
