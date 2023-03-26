const mongoose = require('mongoose')


const ContactSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:'Enter your first name:'
    },
    secondName:{
        type:String,
        required:'Enter your second name:'
    },
    email:{
        type:String,
    },
    company:{
        type:String,
    },
    phone:{
        type:Number,
    },
    created_data:{
        type:DataTransfer,
        default:Date.now()
    }
})

module.exports = mongoose.model("Crms",ContactSchema);