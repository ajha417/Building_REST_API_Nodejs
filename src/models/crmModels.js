const mongoose = require('mongoose')

const Schema = mongoose.Schema;
export const ContactSchema = new Schema({
    firstName:{
        type:String
        
    },
    secondName:{
        type:String,
        
    },
    email:{
        type:String,
    },
    company:{
        type:String,
    },
    phone:{
        type:Number,
    }
})
// export default ContactSchema;