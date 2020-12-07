const express = require('express')
const router = express.Router()

const quizController = require('../app/controllers/quizController')

router.get('/api/quiz',quizController.list)
router.get('/api/quiz/:id',quizController.show)
router.post('/api/quiz'  , quizController.create)
router.put('/api/quiz/:id', quizController.update)
router.put('/api/quiz/add/:id' , quizController.addChoice)
router.put('/api/quiz/remove/:id' , quizController.removeChoice)
// router.delete('/api/products/:id' ,quizController.destroy)
// router.get('/api/products/category/:id',quizController.listspecific)

module.exports = router