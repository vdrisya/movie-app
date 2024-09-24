const express=require('express');
const morgan=require('morgan');
const app=new express();
app.use(morgan('dev'));
const movieRoutes=require('./routes/movieRoutes');
app.use('/movies',movieRoutes);
require('dotenv').config();
const PORT=process.env.PORT
require('./db/connection');



app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);

})
