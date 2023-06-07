const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    name : String,
    lastName : String,
    email :{type: String , unique: true},
    pwd : String,
    confirmPwd : String,
    tel : Number,
    adresse : String,
    avatar : String,
});
// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);
// Model Name "User" => PascalCase
const user = mongoose.model("User",userSchema);
module.exports = user;