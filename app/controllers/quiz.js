const Quiz = require('../models/quiz')
const quizController = {}

// This returns list of all questions.
quizController.list = (req, res) => {
    Quiz.find()
        .then((questions) => {
            if (questions.length > 0) {
                res.json(questions)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

// This returns question by id.
quizController.get = (req, res) => {
    const id = req.params.id
    if(!id) res.json({});
    else {
    Quiz.findById(id)
        .then((question) => {
            if (question) {
                res.json(question)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
    }
}

// This create questions
quizController.create = (req, res) => {
    const body = req.body
        const quiz = new Quiz(body)
        quiz.save()
            .then((question) => {
                res.json(question)
            })
            .catch((err) => {
                res.json(err)
            })
}

// this returns updated qusetion & answer by (id and type).
quizController.update = (req, res) => {
    const _id = req.params.id
    const type = req.query.type
    const body = req.body
    if(!id) res.json({});
    else {
        Quiz.updateByType(_id , type , body)
        .then((question) => {
            res.json(question)
        })
        .catch((err) => {
            res.json(err)
        })
    }
}

// this deletes the question by id.
quizController.remove = (req,res) =>{
    const id = req.params.id
    if(!id) res.json({});
    else {
        Quiz.findByIdAndDelete(id) 
        .then((question)=>{
            res.json(question)
        })
        .catch((err)=>{
            res.json(err)
        })
    }
}
module.exports = quizController