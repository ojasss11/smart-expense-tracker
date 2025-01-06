const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
//to validate install express-validator while checking user during registration
const {body} = require('express-validator');

router.post('/register', [
    body('name').isLength({min: 3}).withMessage('Name must be atleast 3 characters'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password must be atleast 6 characters')
], userController.registerUser);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password must be atleast 6 characters')
], userController.loginUser);

module.exports = router;