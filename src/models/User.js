const mongoose = require('mongoose');
const userShema = new mongoose.Schema({
    // {
    //  name:String,
    //  email :{type:String , unique: true},
    //  password:String,
    // role:{type: String , enum:['freelancer','client'], default: 'freelancer'}
    // }
    name :  {
        type:String,
        required:true
    },
    email : {
        type:String ,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }}
);

module.exports = mongoose.model('User', userShema); 