const dotenv = require('dotenv');
dotenv.config();
const express=require('express');
const app=express();
const cors= require('cors');
const connectDB = require('./db/db');
const userrouter = require('./routes/user.routes');
const cookieparser = require('cookie-parser');
const captianrouter = require('./routes/captian.routes');

app.use(cors());
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());

app.use('/users' ,userrouter);
app.use('/captians' ,captianrouter);


app.get('/',(req,res)=>{
    console.log('ih');
    res.send("hlo bhai");
})


module.exports=app;