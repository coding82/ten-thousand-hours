'use strict'
// seeding heroku database command: heroku run npm run seed

const db = require('./db')
const {User, Plan} = require('./db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({firstName: "Eunji", lastName: "Song", email: 'eunji@email.com', password: '123', isAdmin: true}),
    User.create({firstName: "Cheng", lastName: "Lin", email: 'cheng@email.com', password: '123', isAdmin: true}),
    User.create({firstName: "Angie", lastName: "Smith", email: 'angie@email.com', password: '123'}),
    User.create({firstName: "Jeremy", lastName: "Tsang", email: 'jeremy@email.com', password: '123'}),
    User.create({firstName: "Yuna", lastName: "Kim", email: 'kim@email.com', password: '123'})
  ])

  const plans = await Promise.all([
    Plan.create({
      title: "coding",
      userId: 1,
      status: "active",
      targetHours: 10000,
      currentHours: 500,
      startedAt: new Date(2017, 1, 1)
    }),
    Plan.create({
      title: "yoga",
      userId: 1,
      status: "completed",
      targetHours: 100, currentHours: 100,
      startedAt: new Date(2017, 11, 1),
      completedAt: Date.now()
    }),
    Plan.create({
      title: "studying",
      userId: 1,
      status: "almost at the peak",
      targetHours: 5000,
      currentHours: 4900,
      startedAt: new Date(2008, 2, 1)
    }),

    Plan.create({
      title: "dancing",
      userId: 2,
      status: "active",
      targetHours: 1000,
      currentHours: 500,
      startedAt: new Date(2017, 4, 1)
    }),
    Plan.create({
      title: "singing",
      userId: 2,
      status: "completed",
      targetHours: 1000,
      currentHours: 500,
      startedAt: new Date(2017, 5, 1),
      completedAt: new Date(2018, 5, 1)
    }),
    Plan.create({
      title: "cooking",
      userId: 2,
      status: "active",
      targetHours: 10000,
      currentHours: 500,
      startedAt: new Date(2018, 1, 1)
    }),

    Plan.create({
      title: "Learning Chinese",
      userId: 3,
      status: "active",
      targetHours: 10000,
      currentHours: 500,
      startedAt: new Date(2018, 2, 1)
     }),
    Plan.create({
      title: "Piano",
      userId: 3,
      status: "active",
      targetHours: 10000,
      currentHours: 500,
      startedAt: new Date(2012, 4, 1)
     }),
    Plan.create({
      title: "coding",
      userId: 3,
      status: "active",
      targetHours: 10000,
      currentHours: 6000,
      startedAt: new Date(2000, 4, 1)
     }),

     Plan.create({
      title: "Machine Learning",
      userId: 4,
      status: "active",
      targetHours: 10000,
      currentHours: 500,
      startedAt: new Date(2018, 2, 1)
     }),
    Plan.create({
      title: "Cooking",
      userId: 4,
      status: "active",
      targetHours: 10000,
      currentHours: 1500,
      startedAt: new Date(2013, 4, 1)
     }),
    Plan.create({
      title: "Writing Books",
      userId: 4,
      status: "completed",
      targetHours: 10000,
      currentHours: 10000,
      startedAt: new Date(2008, 4, 1),
      completedAt: new Date(2016, 4, 1),
     }),


    Plan.create({
      title: "Running",
      userId: 5,
      status: "active",
      targetHours: 10000,
      currentHours: 3000,
      startedAt: new Date(2015, 5, 1),
    }),
    Plan.create({
      title: "Learning Spanish",
      userId: 5,
      status: "almost at the peak",
      targetHours: 1000,
      currentHours: 950,
      startedAt: new Date(2017, 2, 1),
    }),
    Plan.create({
      title: "Skating",
      userId: 5,
      status: "completed",
      targetHours: 10000,
      currentHours: 10000,
      startedAt: new Date(2004, 5, 1),
      completedAt: new Date(2014, 10, 1),
    }),

  ])
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${plans.length} plans for ${users.length} users`)
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')

    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
