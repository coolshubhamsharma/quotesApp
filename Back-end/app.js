const express = require('express'); //returns a func
const app = express(); //returns an obj
const mongoose = require('mongoose');
const seedDB = require('./seed');
const cors = require('cors');
const quoteRoutes = require('./apis/quoteRoutes');

const dbURL = process.env.dbURL;
mongoose.connect('mongodb+srv://coolshubhamsharma26:URgrvj63rukiOUYO@cluster0.8i4fs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('db connected');
})
.catch((err)=>{
    console.log('error , db not connectd', err);
})

const REACT_APP_BACKEND_URL = process.env.BackUrl;
app.use(cors({origin: [REACT_APP_BACKEND_URL] })); //tellings cors that which server is going to send the get request

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
