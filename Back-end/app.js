const express = require('express'); //returns a func
const app = express(); //returns an obj
const mongoose = require('mongoose');
const seedDB = require('./seed');
const cors = require('cors');
const quoteRoutes = require('./apis/quoteRoutes');
const dotenv = require('dotenv');

dotenv.config();

const dbURL = process.env.dbURL;
mongoose.connect(dbURL)
.then(()=>{
    console.log('db connected');
})
.catch((err)=>{
    console.log('error , db not connectd', err);
})


app.use(cors({origin:'https://quotesapp-1.onrender.com'})); //tellings cors that which server is going to send the get request

app.use(express.json());//json data
app.use(express.urlencoded({extended:true})); //form data


app.use(quoteRoutes);


app.get('/hello' , (req, res)=>{
    res.status(200).json({msg:'hello from Quotesapp'}); // kya hoga ki ye jo javascript ka obj hia apna usko json me convet karke bhej dega

})



// seeding the database
// seedDB();











app.listen(8080 , ()=>{
    console.log('server started at 8080');
})
