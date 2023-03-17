const mongoose = require("mongoose")
const connect = () =>{
    console.log("Connected to the local database")
    // return mongoose.connect("mongodb+srv://amit123:0371@cluster0.n1ipgzu.mongodb.net/rbclone?appName=mongosh+1.7.1/rb_clone");
    // return mongoose.connect("mongodb://localhost:27017/quiz-app")
    return mongoose.connect("mongodb+srv://a123:a123@cluster0.wxetdxs.mongodb.net/?retryWrites=true&w=majority")
  }
  
  // mongodb://127.0.0.1:27017/
  module.exports = connect;