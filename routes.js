const express = require('express')
const db = require('./db')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('signup')
})

router.get('/profile/:id', (req, res) => {
  let id = req.params.id

  Promise.all([
    db.grabUser(id),
    db.grabPhotosOfUser(id)
  ])
  .then(([user, artworks]) => {
    res.render('profile', {user, artworks})
  })
})

// view gallery
router.get('/browse', (req, res) => {
  db.getGallery()
  .then(images => {
    console.log({images})
    res.render('newsfeed', {images})
  })
})

// view single image
router.get('/image/:id', (req, res) => {
  let id = req.params.id

  Promise.all([
    db.getImage(id),
    db.getCommentsOfImage(id)
  ])
  .then(([image, comments]) => {
    res.render('image', {image, comments})
  })
})

router.post('/image/:id', (req, res) => {
  let newComment = {
    comment: req.body.comment,
    author_id: req.body.user_id,
    image_id: req.params.id
  }
  db.newComment(newComment)
  .then(() => {
    res.redirect(`/image/${req.params.id}`)
  })
})
//create New User form
router.post('/create-user', (req, res) => {
  let newUser = {
    name: req.body.name,
    username: req.body.userName,
    email: req.body.email,
    bio: req.body.bio,
    avatar_url: req.body.avatar_url
  }

  db.createNewUser(newUser).then(id => {
    console.log('Redirecting...')
    res.redirect(`/profile/${id}`)
  })
})

router.get('/post', (req, res) => {

  res.render('create')

})

//Add new image form
router.post('/post-image', (req, res) => {
  let newImage = {
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    artist_id: req.body.id,
  }

  db.addNewImage(newImage).then(() => {
    res.redirect(`/profile/${req.body.id}`)
  })
})

module.exports = router
