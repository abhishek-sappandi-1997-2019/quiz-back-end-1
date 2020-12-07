const Quiz = require('../models/quiz')
const quizController = {}

quizController.list = (req, res) => {
    Quiz.find()
        .then((questions) => {
            res.json(questions)
        })
        .catch((err) => {
            res.json(err)
        })
}

quizController.show = (req, res) => {
    const id = req.params.id
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
// admin-rights
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

quizController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
        Quiz.findByIdAndUpdate(id, body, { new: true, runValidators: true })
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

quizController.addChoice = (req, res) => {
    const id = req.params.id
    const body = req.body
        Quiz.findByIdAndUpdate({ _id : id },{ $push : {options : body.choice } } , {upsert: true , new : true})
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

quizController.removeChoice = (req, res) => {
    const id = req.params.id
    const body = req.body
        Quiz.findByIdAndUpdate({ _id : id },{ $pull : { options : body.choice } } , { new : true })
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
// quizController.destroy = (req, res) => {
//     const id = req.params.id
//     Quiz.findByIdAndDelete(id)
//         .then((question) => {
//             if (question) {
//                 res.json(question)
//             } else {
//                 res.json({})
//             }
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

// quizController.listspecific = (req,res) => {
//     const id = req.params.id
//     Category.findByIdAndUpdate(id)
//     .then((data) => {
//         question.find({ category : data._id})
//             .then((filtered)=>{
//                 console.log(filtered);
//                 res.json(filtered)
//             })
//     })
// }

module.exports = quizController