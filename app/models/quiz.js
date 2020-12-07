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
    answer :{
        type : String,
        required : true
    }
})

quizSchema.statics.updateByType = function(_id , type ,body){
    const Quiz = this
    if(type === 'add') {
        return Quiz.findByIdAndUpdate(_id ,{ $push : {options : body.choice } } , {upsert: true , new : true}) 
    } else if(type === 'remove'){
        return Quiz.findByIdAndUpdate(_id ,{ $pull : { options : body.choice } } , { new : true })
    }else if(type === 'edit'){
        return Quiz.findByIdAndUpdate(_id , body, { new: true })
    }
}

const Quiz = mongoose.model('Quiz',quizSchema)
module.exports = Quiz