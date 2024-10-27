const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    return res.json({message:"TODO APP TESTING"})
})

app.listen(5050,()=>{
    console.log("SERVER UP AND RUNNING")
})