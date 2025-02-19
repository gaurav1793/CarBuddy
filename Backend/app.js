const dotenv = require('dotenv');
dotenv.config();
const express=require('express');
const app=express();
const cors= require('cors');
const connectDB = require('./db/db');
const userrouter = require('./routes/user.routes');
const cookieparser = require('cookie-parser');
const captianrouter = require('./routes/captian.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/rides.routes');

app.use(cors());
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());

app.use('/users' ,userrouter);
app.use('/captains' ,captianrouter);
app.use('/maps',mapsRoutes);
app.use('/rides',rideRoutes);

app.get('/',(req,res)=>{
    console.log('ih');
    res.send("hlo bhai");
})


module.exports=app;