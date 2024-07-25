const connecttoMongo = require('./db')
const express = require('express')

connecttoMongo();

const app = express()
const port = 3000

// Available Routes path=>(path,callback function)
// app.get('/',(req,res)=>{
//     res.send("Hello UBAID!")
// })

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port,()=>{
    console.log(`port is http://localhost:${port}`)
})