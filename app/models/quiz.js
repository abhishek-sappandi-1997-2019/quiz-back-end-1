const mongoose = require('mongoose')

const Schema = mongoose.Schema
const quizSchema = new Schema({
    question : {
        type : String ,
        required : [true, 'question is required']
    } ,
    options : {
        type : Array ,
        required : true
    },
    // options : [
    //     {
    //         choice :{
    //             type : String,
    //             required : true
    //         } 

    //     }
    // ],
    answer :{
        type : String,
        required : true
    }
})

const Quiz = mongoose.model('Quiz',quizSchema)
module.exports = Quiz