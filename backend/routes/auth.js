const express = require('express')
const router = express.Router()

//  syntax (path,callback function)
router.get('/',(req,res)=>{
    obj = {
        title:'Ubaid',
        description: 'My name',
    }
    res.json(obj)
})       


module.exports = router