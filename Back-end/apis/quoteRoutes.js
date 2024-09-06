const express = require('express');
const router = express.Router(); // mini instance 
const Quotes =  require('../models/Quotes');
router.use(express.urlencoded({extended:true}));

//route to show all the quotes
router.get('/allquotes' , async(req , res)=>{
    try{
        let allQuotes = await Quotes.find();
        // console.log(allQuotes);
        res.status(200).json(allQuotes);
    }
    catch(e){
        res.status(400).json({msg:'something went wrong'});
    }

})


//route to add new quotes
router.post('/addquotes' , async(req ,res)=>{
    let {text , author} = req.body;
    console.log(author, text);
    await Quotes.create({text , author});
    res.status(201).json({msg:'new quote created successfully'}); 

})


//route to show individual quotes
router.get('/quote/:id' , async(req , res)=>{
    let {id} = req.params;
    const quote = await Quotes.findById(id);
    res.status(200).json(quote);
})









module.exports = router;