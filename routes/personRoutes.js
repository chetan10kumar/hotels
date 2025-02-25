const express=require('express');
const router=express.Router();
const Person=require('./../models/personSchema');

router.post('/',async(req,res)=>
    {
        try{
            /*Assuming data is stored in req.body*/
            const data=req.body;
            const newPerson=new Person(data);
            const response=await newPerson.save();
            console.log("Data saved Successfully");
            res.status(200).json(response);
        }
        catch(err){
            console.log(err);
            res.status(500).json({error:"Internal Server Error"});
    
        }
    })
    /*Now writing get method to fetch person's details*/
    router.get('/',async(req,res)=>
    {
        try{
            const response=await Person.find();
            console.log("Data fetched successfully");
            res.status(200).json(response);
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({error:"Internal Server Error"});
        }
    })
    /*Now writing parameterized url*/
    router.get('/:workType',async(req,res)=>
    {
        try{
            const workType=req.params.workType;
            if(workType=="owner" || workType=="manager" || workType=="chef")
            {
                const response=await Person.find({work:workType});
                console.log("Data fetched successflly");
                res.status(200).json(response);
            }
                else
                {
                res.status(400).json({error:"WORKTYPE NOT FOUND ERROR"});
                }
            
            
        }
        catch(err)
            {
                console.log(err);
                res.status(500).json({error:"Internal Server Error"});
            }
    })
    router.put('/:id',async(req,res)=>
    {
        try{
                const personId=req.params.id;
                const updatedpersondata=req.body;
                const response=await Person.findByIdAndUpdate(personId,updatedpersondata,{
                    new:true,          //new true means updated data is stored
                    runValidators:true,
    
                });
                
                if(!response)
                {
                   return  res.status(404).json({error:"User not found error"});
                }
                console.log("Data updated successfully");
                res.status(200).json(response);
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({error:"Internal Server Error"});
        }
    })
    /*Now delete method to delete*/
    router.delete('/:id',async(req,res)=>
    {
        try{
            const personId=req.params.id;
            const response=await Person.findByIdAndDelete(personId);
            if(!response)
            {
                return res.status(404).json({error:"User not found Error"});
    
            }
            console.log("User deleted Successsfully");
            res.status(200).json(response);
        }
        catch(err){
            console.log(err);
            res.status(500).json({error:"Internal Server Error"});
        }
    })
    module.exports=router;