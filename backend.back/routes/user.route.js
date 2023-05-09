let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// User Model
let userSchema = require('../Models/User')

// Login
// router.route('/login').post((req, res, next) => {
//   userSchema.authenticate()(req.body.username, req.body.password, (error, user) => {
//     if (error || !user) {
//       console.log(error)
//       return next(error)
//     } else {
//       req.session.userId = user._id
//       return res.redirect('/dashboard')
//     }
//   })
// })


// READ Students
router.route('/').get((req, res) => {
  userSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/edit-user/:id').get((req, res) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-user/:id').put((req, res, next) => {
  userSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error)
        return next(error)
      } else {
        res.json(data)
        console.log('user updated successfully !')
      }
    },
  )
})

// Delete Student
router.route('/delete-user/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
