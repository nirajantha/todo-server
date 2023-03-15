const express = require('express')

const mongoose = require('mongoose')

const cors = require("cors")

const app= express()

const port = 4001;

app.use(cors());
app.use(express.json());

const todoroutes = require("./routes/todoroutes")

app.get("/",(req,res)=>{
    console.log(req)
    res.send("app is running")
})

app.use("/todos",todoroutes)


mongoose.connect("mongodb://localhost/") 
.then (()=>{
    app.listen(port,()=>{
        console.log(`sever running on http://localhost:${port}`);
    })
    console.log("database connect");
})
.catch((error)=>{
    console.log("error::",e);
 })
