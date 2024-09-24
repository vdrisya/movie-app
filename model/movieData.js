const mongoose=require('mongoose');
//creating the schema
const movieSchema=mongoose.Schema({
    movieName:String,
    movieDirector:String,
    moveDescription:String,
    moviePrice:Number
})
const movieData=mongoose.model('movie',movieSchema);
module.exports=movieData;