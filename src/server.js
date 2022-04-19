const express = require("express");
const { use } = require("express/lib/application");
const app = express();
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs: 20000, 
	max: 5, 
    message:
		'Too many accounts created from this IP, please try again after an sometimes',
	standardHeaders: true, 
	legacyHeaders: false, 
})
app.use(limiter)

const data =[
    {
    name: "dinesh",
    age: 25
},
{
    name: "sathish",
    age: 25
},
{
    name: "vell",
    age: 25
},
{
    name: "venkat",
    age: 25
},
]

app.get("/data",limiter, async(req,res)=>{
    try {
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.listen(5000, async(res,req)=>{
    try {
        console.log("Listening is port 5000");
    } catch (error) {
        
    }
})