const express = require('express');
const router = express.Router();
const movieModel=require('../model/movieData');
router.use(express.json());
router.use(express.urlencoded({extended:true}));
//CRUD
//get operation
router.get('/',async(req,res)=>{
    try {
        const data=await movieModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('Data not found');
    }



})
//post operation 
router.post('/addMovies',async(req,res)=>{
    try {
        var item=req.body;
        const data1=new movieModel(item);
        const saveddata=await data1.save();
        res.status(200).send('post successful');
    } catch (error) {
        res.status(404).send('post unsuccessful');
    }
})

//update operation
router.put('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await movieModel.findByIdAndUpdate(id,req.body)
        res.status(200).send('update successful')
    } catch (error) {
        res.status(404).send('update unsuccessful')
    }
})
//delete
router.put('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await movieModel.findByIdAndDelete(id,req.body)
        res.status(200).send('Delete successful')
    } catch (error) {
        res.status(404).send('Delete unsuccessful')
    }
})

module.exports = router;
    