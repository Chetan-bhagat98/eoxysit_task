const { EmployeeModel } = require("../Model/Employee.model");
const express = require("express");
const Employee_route = express.Router();

// ****************Register Employee********

Employee_route.post("/api/user", async (req, res) => {
    const payload = req.body;
    try{
         const data = await new EmployeeModel(payload);
        await data.save();
        res.status(200).send("Employee Added")
    }catch(err){
        res.send({"error":err})
    }

});

// ****************All Register Employee********

Employee_route.get("/api/user", async (req, res) => {
    try{
        const data = await  EmployeeModel.find({});
        res.status(200).send(data)
    }catch(err){
        res.send({"error":err})
    }
});
// ****************Update Employee********

Employee_route.put("/api/user/:userID", async (req, res) => {
    var userID = req.params.userID;

    let payload=req.body
    try {
        var data = await EmployeeModel.findByIdAndUpdate({ _id: userID },{...payload});;
        await res.status(200).send(data)
    } catch (err) {
        res.send({ "msg": "Invalid ID" })
    }

});

// ****************Delete Employee********
Employee_route.delete("/api/user/:userID", async (req, res) => {
    var userID = req.params.userID;
    try {
        var data = await EmployeeModel.findByIdAndDelete({ _id: userID });;
        await res.status(200).send(data)
    } catch (err) {
        res.send({ "msg": "Invalid ID" })
    }

});



module.exports = { Employee_route }