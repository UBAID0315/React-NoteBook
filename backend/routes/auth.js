const express = require('express')
const router = express.Router();
const User = require('../models/User')

// change get to post

router.get('/',(req,res)=>{
    console.log(req.body)
    const user = User(req.body);
    user.save()
    res.send(req.body);
})

module.exports = router