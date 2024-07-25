const express = require('express')
const router = express.Router()

//  syntax (path,callback function)
router.get('/',(req,res)=>{
    res.json([])
})       


module.exports = router