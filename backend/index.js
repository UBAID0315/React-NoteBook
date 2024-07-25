const connecttoMongo = require('./db')
const express = require('express')

connecttoMongo();
const app = express()
const port = 3000;

// Available Routes (default)
// app.get('/' ,(req,res)=>{
//     res.send('hello ubaid!')}
// )

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port ,()=>{
    console.log(`example app listening port is http://localhost:${port}`)
})