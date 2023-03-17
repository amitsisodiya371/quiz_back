const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    gender:{type:String,required:true},
    mobile:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false
})



userSchema.pre("save",function(next){
    if(!this.isModified('password')) return next();
    const hash = bcrypt.hashSync(this.password)
    this.password = hash;
    return next();
})
userSchema.methods.checkPassword = function(password){
    const match = bcrypt.compareSync(password,this.password)
    return match
}
const User = mongoose.model("user",userSchema)


module.exports = User;


// {
//     "name":"amit",
//     "email":"amit@gmail.com",
//     "password":"1234",
//     "mCode":"1234",
//     "mobile":"123456789"
//    }