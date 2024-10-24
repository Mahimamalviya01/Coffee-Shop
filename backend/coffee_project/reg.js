const mongoose=require("mongoose")
const register=new mongoose.Schema(
    {    
      uname:String,
      upass:String,
      uemail:String,
      umob:String  
    }
)

//connection through model
// const hello=mongoose.model("coffee",coffeeSchema)
// module.exports=hello
 module.exports = mongoose.model("register",register)