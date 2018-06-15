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
    .then(ids => {
      return ids[0]
    })
}

function getGallery(testConn) {
  const db = testConn || conn

  return db('images')
    .join('users', 'images.artist_id', 'users.id')
    .select(
      'title',
      'description',
      'url',
      'artist_id',
      'images.id as image_id',
      'created_at',
      'username',
      'avatar_url',
    )
    .orderBy('created_at', 'asc')
}

function getImage(id, testConn) {
  const db = testConn || conn

  return db('images')
    .join('users', 'images.artist_id', 'users.id')
    .select(
      'title',
      'description',
      'url',
      'artist_id',
      'images.id as image_id',
      'created_at',
      'username',
      'name',
      'avatar_url',
    )
    .where('images.id', id)
    .first()
}

function addNewImage(image, testConn) {
  const db = testConn || conn

  return db('images')
    .insert(image)
}

function newComment(newComment, testConn) {
  const db = testConn || conn

  return db('comments')
  .insert(newComment)
}

function getCommentsOfImage(id, testConn) {
  const db = testConn || conn

  return db('comments')
  .join('users', 'users.id', 'author_id' )
  .select(
    'comment',
    'author_id',
    'name',
    'username',
    'written_at',
    'avatar_url'
  )
  .where('image_id', id)
  .orderBy('written_at', 'asc')
}

module.exports = {
    grabUser,
    grabPhotosOfUser,
    createNewUser,
    getGallery,
    getImage,
    addNewImage,
    newComment,
    getCommentsOfImage
}

// testing calls
getCommentsOfImage(2).then(res => {
  console.log(res);
})
