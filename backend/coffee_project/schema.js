const mongoose=require("mongoose")
const coffeeSchema=new mongoose.Schema(
    {    
        id:Number,
        name:String,
        description:String,
        price:Number,
        image:String
    }
)

//connection through model
// const hello=mongoose.model("coffee",coffeeSchema)
// module.exports=hello
 module.exports = mongoose.model("coffee",coffeeSchema)