const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

 
//retrieving data
 router.get('/contacts', (req ,res , next)=>{
     Contact.find(function(err,contacts){
         res.json(contacts);
     })
 });

 //add contact 
 router.post('/contact', (req , res , next )=>{
     let newContact = new Contact({
         first_name : req.body.first_name,
         last_name : req.body.last_name,
         phone: req.body.phone
     })

     newContact.save((err,contact)=>{
        if(err){
            res.json({msg: " failed to connect"});
        }else{
            res.json({msg: " contact added successfuly"});
        }
     });
 });

 //delete data
 router.delete('/contact/:id', (req, res, next )=>{
    Contact.findOneAndDelete({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});


 module.exports = router; 