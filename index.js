const express = require('express');
const app = express();
const routes = require('./src/routes/crmRoutes')
const PORT = 3000;

routes(app)
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})