import mongoose from "mongoose";

const userSchema=new mongoose.Schema({// mongoose m schema banata h 
    sender:{  // ye type bata raha h ki user kis type ka data store kr raha h
        type:String, // ye field string store karega
        required:true,// ye field mandatory hai
        enum:["user"]//sirf "user" value allowed hai
    },
    text:{
        type:String,//user ka message
        required:true//bina message save nahi hoga
    },
    timstamp:{
        type:Date,// agar time mil gaya to theek verna automatically date,time save kr lega
        default:Date.now
    }
})

const User=mongoose.model("User",userSchema)  //mongoose.model = schema ko collection me convert karta hai

//"User" → collection ka naam (MongoDB me automatically plural ho jayega → users)
export default User;