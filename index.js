const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    return res.json({message:"TODO APP"})
})

app.listen(5050,()=>{
    console.log("SERVER UP AND RUNNING")
})