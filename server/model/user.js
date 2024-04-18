const mongoose=require('mongoose')
const Schema = mongoose.schema;


UserSchema=new Schema({
    username:{type:String, required:true, unique:true} ,
    password:{type:String, required:true},
 });
 
 
 module.exports =mongoose.model('User', UserSchema)