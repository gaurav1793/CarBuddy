const CaptianModel = require('../Models/captian.model');
const { createCaptian } = require('../services/captian.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../Models/blacklistToken.model');

const registerCaptian = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const captianExists = await CaptianModel.findOne({ email });

    if(captianExists){
        return res.status(400).json({message:"Captian already exists"});
    }

    const hashedPassword = await CaptianModel.hashPassword(password);

    const captian = await createCaptian({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captian.generateAuthToken();

    res.status(201).json({ token,captian });
}

const loginCaption = async (req, res) => {
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const { email , password} = req.body;
    const captian =await CaptianModel.findOne({email}).select('+password');

    if(!captian){
        return res.status(401).json({message:"Invalid email or password"});
    }

    const isMatch = await captian.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"});
    }

    const token = captian.generateAuthToken();
    res.cookie('token',token);
    res.status(200).json({token,captian});
}

const getCaptionProfile=async(req,res)=>{
    res.status(200).json(req.captian);
}
const logoutCaptian = async (req, res) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await blackListTokenModel.create({ token });
    res.status(200).json({message:"Logged out successfully"});
}


module.exports = { registerCaptian ,loginCaption,getCaptionProfile ,logoutCaptian};