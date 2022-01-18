require('./db')
const bodyParser = require('body-parser')
const express =require('express')
const mongoose = require('mongoose');
const PostMessageRoutes= require('./controllers/postsMessageController')

var app=express()
app.use(bodyParser.json())



mongoose.connect('mongodb+srv://manav21:manav21@cluster0.z6cqg.mongodb.net/postManageDB?retryWrites=true&w=majority', { useNewUrlParser: true }, { useUnifiedTopology: true })
    .then(() => console.log('connected to db'))
    .catch((err) => console.log(err))

app.listen(4000,()=>{
    console.log("server running at 4000")
})

app.use('/postmessages',PostMessageRoutes)