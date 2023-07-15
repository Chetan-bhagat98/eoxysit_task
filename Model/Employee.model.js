const mongoose=require("mongoose");
const Schema=mongoose.Schema

const EmploeeSchema = new Schema({
      Name: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
      require:true
    },
    Department:{
      type: String,
       default:"HR" || "Tech"||"Product"||"Leadership"
    },
    AnnualSalary: {
      type: Number,
      required: true,
    }
  },{
    timestamps: true, 
  });
const EmployeeModel=mongoose.model("Employees",EmploeeSchema);

module.exports={EmployeeModel};