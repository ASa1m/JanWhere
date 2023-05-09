let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Student Model
let animalSchema = require('../Models/Animal')

// CREATE Student
router.route('/create-animal').post((req, res, next) => {
  animalSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ Students
router.route('/').get((req, res) => {
  animalSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/edit-animal/:id').get((req, res) => {
  animalSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-user/:id').put((req, res, next) => {
  animalSchema.findByIdAndUpdate(
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
        console.log('Animal updated successfully !')
      }
    },
  )
})

// Delete Student
router.route('/delete-animal/:id').delete((req, res, next) => {
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
