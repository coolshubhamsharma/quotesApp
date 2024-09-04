const mongoose = require('mongoose');
const Quotes = require('./models/Quotes');


let dummyQuotes  = [
    {
        author:'Shubham Sharma',
        text:'syntax over symentics'
    },
    {
        author:'Arshad Iqbal',
        text:'Jai Hind'
    },
    {
        author:'ANdrew Tate',
        text:'Jai Jawan Jai Kisan'
    },
    {
        author:'Stalin',
        text:'chhat pe soya tha behnoi'
    },
    {
        author:'Thomas Shelby',
        text:'Jiskoi biwi choti uska bhi abda naam hai '
    }

]

async function seedDB(){
    // await Quotes.deleteMany({}); // we will run this statement if we are seeding the db every time when we refresh the server
    await Quotes.insertMany(dummyQuotes);
    console.log("DB seeded successfully"); 
}

module.exports = seedDB;