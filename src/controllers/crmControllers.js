import mongoose from "mongoose";
import {ContactSchema} from '../models/crmModels'
const ContactModel = mongoose.model('Contact',ContactSchema);
export const addNewContact = async(req,res)=>{
    const contacts = new ContactModel(req.body);
   const contactDetails = await contacts.save();
   if(!contactDetails){
        console.log("error");
        res.send("error");
   }
   else{
    res.json(contactDetails);
   }
}

export const getContacts = async (req,res)=>{
  const contacts = await ContactModel.find({});
  if(!contacts){
    res.send('error in fetching data');
  }
  else{
    res.json(contacts)
  }
}

export const getContacById = async (req,res)=>{
    const contactsById = await ContactModel.findById(req.params.contactId);
    if(!contactsById){
        res.send("Couldn't fetch data, please try again later")
    }
    else{
        res.json(contactsById);
    }
} 

export const updateContact = async (req,res)=>{
    const updatedContact = await ContactModel.findOneAndUpdate({_id:req.params.contactId},req.body,{new:true});
    if(!updatedContact){
        res.send("error in updating");
    }
    else{
        res.json(updatedContact);
    }
}

export const deleteContact = async(req,res)=>{
    const deletedData = await ContactModel.deleteOne({_id:req.params.contactId});
    if(!deletedData){
        res.json({message:"Couldn't delete data"});
    }
    else{
        res.json({message:'Successfully deleted!!!'});
    }
}
// module.exports = addNewContact;