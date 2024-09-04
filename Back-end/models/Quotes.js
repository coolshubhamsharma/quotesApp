const mongoose = require('mongoose');

let QuoteSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true,
        trim:true
    },
    text:{
        type:String,
        required:true,
        trim:true
    }
})

const Quotes = mongoose.model('Quotes' , QuoteSchema);

module.exports = Quotes;    