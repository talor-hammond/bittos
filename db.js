const knex = require('knex')
const config = require('./knexfile').development

const conn = knex(config)

function grabUser(id, testConn) {
  const db = testConn || conn

  return db('users')
    .where({id})
    .first()
}

function grabPhotosOfUser(id, testConn){
  const db = testConn || conn

  return db('images')
    .where({artist_id: id})
    .orderBy('created_at', 'asc')
}

function createNewUser(newUser, testConn){
  const db = testConn || conn

  return db('users')
    .insert(newUser)
}

function getGallery(testConn) {
  const db = testConn || conn

  return db('images')
}

function getImage(id, testConn) {
  const db = testConn || conn

  return db('images')
    .where({id})
    .first()
}

module.exports = {
    grabUser,
    grabPhotosOfUser,
    createNewUser,
    getGallery,
    getImage
}

// testing calls
// getImage(1).then(res => {
//   console.log(res);
// })
