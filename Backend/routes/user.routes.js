const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const { registerUser ,loginUser} = require('../Controllers/user.controller');

const middle =(req,res,next)=>{
    console.log("hlo from routes");
    next();
}
router.post('/register',middle, [body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('password name must be at least 6 characters long')
    ], 
    registerUser
)


router.post('/login',
    [body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')],
    loginUser
)




module.exports = router;