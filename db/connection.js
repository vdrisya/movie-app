const mongoose=require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.mongoDB_URL).then(()=>{ //connection string will change cloud connect, .then --promise--connection establish,-.catch--
    console.log('connection estblished');

})
.catch(()=>{
    console.log('error in connection');
}) 