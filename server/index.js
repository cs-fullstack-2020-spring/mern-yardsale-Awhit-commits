const express = require('express');

const port = 8000;

const app = express();

let api = require('./routes/api')

app.use('/api',api)

let mongoose = require('mongoose')



let mongoDB = 'mongodb+srv://ndrwwhtmr:VaUOsbhP8iq8kqQ2@cluster0-taich.mongodb.net/test?retryWrites=true&w=majority'


mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
console.log(`Connecting to mongoDB at ${mongoDB}`)

// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})