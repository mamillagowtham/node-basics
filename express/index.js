const express = require("express")


const app = express();


app.get("/",(req,res,next)=>{
   res.send("welcome")
   next()
})


app.get("/express",(req,res)=>{
    res.send("new express")
    console.log("print something new to highlight this function ")
 })


 
app.get("/learn",(req,res)=>{
    res.send("just learn it ")
    console.log("print something new to highlight this second function ")

 })


 
app.get("/typing",(req,res)=>{
    res.send("yes trying to learn")
    console.log("print something new to highlight this third function ")

 })


app.listen("5281",()=>{
    console.log("this is server 5281")
})