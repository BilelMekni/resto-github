const mongoose = require("mongoose");
 const platSchema = mongoose.Schema({
    name : String,
    description : String,
    price : Number,
    avatar :String,

 });
 // Model Name "Plat" => PascalCase
 const plat = mongoose.model("Plat",platSchema);
 module.exports = plat;