const express=require('express')
const { isValidObjectId } = require('mongoose')
const postManage = require('../models/postsManags')
var router=express.Router()




router.get("/",(req,res)=>{
    postManage.find().then(post=>{
        res.send(post)
    }).catch(err=>{
        res.status(500).send({ message: err.message || "Error Occurred while retriving flood information" })
    })
})


router.post('/',(req,res)=>{
    var newPost= new postManage({
        title: req.body.title,
        message:req.body.message
    })
    newPost.save((err,doc)=>{
        if(!err) res.send(doc)
        else res.status(500).send({ message: err.message || "Error Occurred while retriving flood information" })
    })
})

router.put('/:id',(req,res)=>{

    if(!isValidObjectId(req.params.id))
         return res.status(400).send( "Not Found" );
    var newPost=new postManage ({
        title: req.body.title,
        message:req.body.message
    })
   
    postManage.findByIdAndUpdate(req.params.id,{$set:newPost},{new:true},(err,doc)=>{
        if(!err) 
            res.send(doc)
        else 
            res.status(500).send( err )
    })
    
})


router.delete('/:id',(req,res)=>{
    if(!isValidObjectId(req.params.id))
         return res.status(400).send( "Not Found" )
    postManage.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(!err) 
            res.send(doc)
        else 
            res.status(500).send( "Error Occurred" )
    })
})

module.exports=router