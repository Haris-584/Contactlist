//importing modules
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');
const route = require('./routes/route');

var app = express();

//adding middleware
app.use(cors());
app.use(bodyparser.json());

//database connection
mongoose.connect('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected', ()=>{
    console.log('Connected to mongodb @ 27017');   
});
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('error in database :' + err );
    } 
});

//static files
app.use(express.static(path.join(__dirname,'public')));

//Routes
app.use('/api',route);

//Routes testing 
app.get('/',(req,res)=>{
    res.send('foobar');
})

//port 
const port = 3000;

app.listen(port,()=>{
    console.log('server start listining from port 3000');
})