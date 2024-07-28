const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "thisismysecretcode@123";

router.get('/createuser', [

    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),

], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // use try and catch for handle unwanted errors
    try {
        
        // if same user is exists never add hi
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email has already exists!" })
        }

        // Generating the hash password
        const salt = await bcrypt.genSalt(10)
        const securePassword = await bcrypt.hash(req.body.password,salt)
        
        // Creating a User
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePassword
        })
        
        const data = {
            user:{
                id:user.id
            }
        }    
        const token = jwt.sign(data,JWT_SECRET)        
        res.json({token})
    } 
    catch (error) {
        console.error(error.message)
        res.status(500).send("Some error has been occured!");
    }
})

module.exports = router