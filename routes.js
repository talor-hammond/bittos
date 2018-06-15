const express = require('express')
const db = require('./db')
const router = express.Router()

router.get('/', (req, res) => {
  //DO THIS NOW!!!!!!!!
  res.render('signupview')
})

router.get('/profile/:id', (req, res) => {
  let id = req.params.id

  Promise.all([
    db.grabUser(id),
    db.grabPhotosOfUser(id)
  ])
  .then(([user, artworks]) => {
    let  = arrOfResults
        //DO THE OTHER THING!!!!!!!
    res.render('profileView', {user, artworks})
  })
})

// view gallery
router.get('/newsfeed', (req, res) => {
  db.getGallery().then(images => {
    res.render('gallery', {images})
  })
})

// view single image
router.get('imagepage/:id', (req, res) => {
  db.getImage(id)
    .then(image => {
      res.render('view', image)
    })
})

//create New User form
router.post('/PLACE', (req, res) => {
  let newUser = {
    name: req.body.name,
    username: req.body.userName,
    email: req.body.email,
    bio: req.body.bio,
    avatar_url: req.body.avatar_url
  }

  db.createNewUser(newUser).then(id => {
    res.redirect(`/profile/${id}`)
  })
})

//Add new image form
router.post('/OTHERPLACE', (req, res) => {
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
