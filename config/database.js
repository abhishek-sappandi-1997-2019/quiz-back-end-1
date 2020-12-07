const mongoose = require('mongoose')

configureDB = () =>{
    // db configuration 
    mongoose.connect(`mongodb+srv://abhi:abhi@cluster0.lze2b.mongodb.net/Quiz?retryWrites=true&w=majority`, { useFindAndModify: false , useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex : true}) 
    .then(()=>{
        console.log('connected to DB');
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = configureDB