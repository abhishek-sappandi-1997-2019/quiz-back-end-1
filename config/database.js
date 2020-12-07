const mongoose = require('mongoose')

configureDB = () =>{
    // db configuration 
    mongoose.connect(process.env.DB_CONNECTION, { useFindAndModify: false , useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex : true}) 
    .then(()=>{
        console.log('connected to DB');
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = configureDB