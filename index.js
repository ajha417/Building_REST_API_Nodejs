const express = require('express');
const app = express();
const routes = require('./src/routes/crmRoutes')
const PORT = 3000;

const mongoose = require('mongoose')
const bodyParser = require('body-parser')


// connecting mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Building_Api',{
    useNewUrlParser:true
});

// bodyparser setup
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

routes(app)
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})