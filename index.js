const Employee_app=require('express')();
const {connection}=require('./Config/db');
require('dotenv').config();
const {Employee_route}=require('./Routes/register.router')
var bodyParser = require('body-parser')
const {auth}=require('./Middlewares/authenticate')

//middleware
Employee_app.use(auth)
Employee_app.use(bodyParser.json())
//route
Employee_app.use('/',Employee_route);


Employee_app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("Connected to DB✅")
    }catch(err){
        console.log(err)
    }
    console.log("Server is running....🚀")
})