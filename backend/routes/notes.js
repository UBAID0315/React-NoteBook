const express = require('express')
const router = express.Router();
const notes = require('../models/Notes')

router.get('/',(req,res)=>{
    res.json([])
})

module.exports = router