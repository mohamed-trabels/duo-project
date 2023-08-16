const mongoose = require("mongoose");

const {clients}=require('./clients')

const mongoUri = "mongodb://127.0.0.1/reservationApp33";

mongoose
  .connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("db mongo connected");
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;


const getAllCleint=()=>{
    return clients.find()
}

const add=(obj)=>{
  return clients.create(obj)
}

const deleteOne=()=>{

}





module.exports.db = db;
module.exports.getAllCleint=getAllCleint
module.exports.add=add