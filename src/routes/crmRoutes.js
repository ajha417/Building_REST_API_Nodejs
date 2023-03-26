// const addNewContact = require('../controllers/crmControllers')
import {addNewContact,getContacts,getContacById,updateContact,deleteContact} from '../controllers/crmControllers'
const routes = (app)=>{
    app.route('/contact')
    .get((req,res,next)=>
    {
        console.log(`the original request point is ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    },getContacts
    ).post(addNewContact)

    app.route('/contact/:contactId')
    .get(getContacById)
    .put(updateContact)
    .delete(deleteContact)
}

module.exports = routes;