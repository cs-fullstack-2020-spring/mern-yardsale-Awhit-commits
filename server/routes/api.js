const express = require('express');

const router = express.Router();

router.use(express.json());

let itemCollection = require('../models/ItemSchema')

router.post('/',(req,res)=>{
    // res.send('Create an Item');
    itemCollection.create(req.body,(results,errors)=>{
        if(errors){
            res.send(errors)
        }
        else{
            res.send(results)
        }
    })

})

router.get('/',(req,res)=>{
    // res.send('Get all Item');
    itemCollection.find({},(results,errors)=>{
        if(errors){
            res.send(errors);
        }
        else{
            res.send(results);
        }
    
    })

})

router.get('/:_id',(req,res)=>{
    // res.send('Get a specific item');
    itemCollection.findOne({_id:req.params._id},(errors,results)=>{
        if(errors){
            res.send(errors)
        }
        else{
            res.send(results)
        }
    })

})

router.delete('/:_id',(req,res)=>{
    // res.send('Delete an item');
    itemCollection.findOneAndDelete({_id:req.params._id},(errors,results) =>{
        if(errors){
            res.send(errors)
        }
        else{
            res.send(`The ${req.params.itemName} was deleted`)
        }
    })

})

router.put('/:_id',(req,res)=>{
    // res.send('Update an Item');
    itemCollection.findOneAndUpdate({_id:req.params._id},req.body,(errors,results)=>{
        if(errors){
            res.send(errors)
        }
        else{
            res.send(`The ${req.params.itemName} was updated`)
        }
    })


})

module.exports = router;