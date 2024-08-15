const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const fetchuser = require('../middleware/fetchUser')
const jwt = require('jsonwebtoken');
const JWT_SECRET = "thisismysecretcode@123";

// Router 1: (for creating the user)
router.post('/createuser', [

    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),

], async (req, res) => {
    let signup = false;
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // use try and catch for handle unwanted errors
    try {

        // if same user is exists never add it
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email has already exists!" })
        }

        // Generating the hash password
        const salt = await bcrypt.genSalt(10)
        const securePassword = await bcrypt.hash(req.body.password, salt)

        // Creating a User
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePassword
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const token = jwt.sign(data, JWT_SECRET)
        signup = true
        res.json({ signup,token })
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Some error has been occured!");
    }
})



// Router 2: (to login the user)

router.post('/login', [

    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').exists(),

], async (req, res) => {
    let login = false;
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body

    try {
        let user = await User.findOne({ email });

        if (!user) {
            login=false
            return res.status(400).json({ error: "Please enter the correct credentials" })
        }

        const PasswordCompare = await bcrypt.compare(password, user.password);

        if (!PasswordCompare) {
            return res.status(400).json({ error: "Please enter the correct credentials" })
        }

        data = {
            user: {
                id: user.id
            }
        }
        const token = jwt.sign(data, JWT_SECRET)
        login=true
        res.json({login,token })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error has been occured!");
    }
})


// Router 3: (to check the details of the login user)
router.get('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id
        const user = await User.findById(userId).select('-password')
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error has been occured!");
    }
})

// Router 4 (is to delete the user)
router.get('/deleteuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id
        const user = await User.findById(userId).select('-password')
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error has been occured!");
    }
})

module.exports = router