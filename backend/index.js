const connecttoMongo = require('./db')
const express = require('express')
var cors = require('cors')

connecttoMongo();
const app = express()
const port = 5000

app.use(cors());
// Available Routes path=>(path,callback function)
app.get('/',(req,res)=>{
    res.send("Hello UBAID!")
})
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port,()=>{
    console.log(`port is http://localhost:${port}`)
})
