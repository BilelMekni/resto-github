const mongoose = require("mongoose");

const chefSchema = mongoose.Schema({
    name : String,
    experience : Number,
    Speciality : String,

});
// Model Name "Chef" => PascalCase
const chef = mongoose.model("Chef",chefSchema);
module.exports = chef;