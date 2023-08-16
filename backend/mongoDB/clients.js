const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const clientSchema = new mongoose.Schema({
  name: String,
  numbrplaces: String,
  date: String,
  time: String,
  event:String
 
});

const clients = mongoose.model("clients", clientSchema);

module.exports.clients = clients;