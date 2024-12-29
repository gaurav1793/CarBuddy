const { validationResult } = require('express-validator');
const userModel =require('../Models/user.model');
const { createUser } = require('../services/user.services');

const registerUser= async(req , res)=>{
    console.log("hlo from controler");
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname , email , password} = req.body;

    const hashedPassword = await userModel.hashPassword(password);
    try { 
    const user = await createUser({
        firstname:fullname.firstname,
        lastname :fullname.lastname,
        email,
        password:hashedPassword
    });
    const token = user.generateAuthToken();

    res.status(201).json({token,user});
    }
    catch(error){
        if (error.code === 11000 && error.keyPattern.email) {
            return res.status(400).json({ message: "Email already exists" });
        }
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }

}

const loginUser=async(req,res)=>{
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const { email , password} = req.body;

}






module.exports={registerUser ,loginUser};