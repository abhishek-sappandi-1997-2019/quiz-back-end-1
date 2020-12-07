const express = require('express')
const router = express.Router()

const quizController = require('../app/controllers/quiz')

router.get('/api/quiz',quizController.list)
router.get('/api/quiz/:id',quizController.get)
router.post('/api/quiz'  , quizController.create)
router.put('/api/quiz/:id', quizController.update)
router.delete('/api/quiz/:id' , quizController.remove)

module.exports = router