const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const {registerCaptian ,loginCaption ,getCaptionProfile ,logoutCaptian} =require('../Controllers/captian.controller');
const { authCaptian } = require('../Middlewares/auth.middleware');
const middle =(req,res,next)=>{
    console.log("hlo from routes");
    next();
}
router.post('/register',middle, [body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('password name must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid Vehicle Type'),
    ], 
    registerCaptian
)


router.post('/login',
    [body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')],
    loginCaption
)

router.use(authCaptian);
router.get('/profile',getCaptionProfile)
router.get('/logout',logoutCaptian)


module.exports = router;