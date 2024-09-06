import React, { useEffect, useState } from 'react'
import Quote from '../Quote/Quote';
import axios from 'axios';

const AllQuotes = () => {

    let [quotes , setQuotes] = useState([]); //when we change the value of a variable in the code it is not reflected upon the server(ie. value change hoti hai par aapka component render nhi hota) so we have to use useState to set the value of the variable

    async function getQuotes(){
        let res = await axios.get(`https://quotesapp-j4ap.onrender.com/allquotes`);
        setQuotes(res.data);
    }

    useEffect(()=>{
        getQuotes();
    }  , [])


  return (
    <div>
        <h1>AllQuotes</h1>
        <ul>

            {
                quotes.map((quote , index)=>{
                    return <Quote
                           key={quote._id}
                           author={quote.author}
                           text={quote.text}
                           id={quote._id}
                    />
                })
            }
        </ul>
    </div>
  )
}

export default AllQuotes