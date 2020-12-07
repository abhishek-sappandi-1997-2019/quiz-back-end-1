const express = require('express')
const configureDB = require('./config/database')
const routes = require('./config/routes')
const cors = require('cors')

const app = express()
const port =  process.env.PORT || 3344

configureDB()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('the server is up')
})


app.use(routes)
app.listen(port ,() =>{
    console.log('server is running on the port',port);
})