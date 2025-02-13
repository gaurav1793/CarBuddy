const express = require('express');
const router = express.Router();
const { authUser} = require('../Middlewares/auth.middleware');
const {getCoordinstes , getDistanseTime , getAutoCompleteSuggestions} =  require('../Controllers/map.controller')
const  {query}  = require('express-validator');

router.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 }),
    authUser ,getCoordinstes
);

router.get('/get-distance-time',
    query('origin').isString().isLength({ min: 3 }),
    query('destination').isString().isLength({ min: 3 }),
    authUser,
    getDistanseTime
);

router.get('/get-suggestions',
    query('input').isString().isLength({ min: 3 }),
    authUser,
    getAutoCompleteSuggestions
);



module.exports = router;