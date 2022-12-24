const express = require('express')
const app = express()
const port = 5000

//the function called on 
app.get('/',(req,res)=>{
    res.send("Hello World ")
})


//app running at the port specified in port 
app.listen(port,()=>{
    console.log(" App running at port http://localhost:5000/ ")
})

