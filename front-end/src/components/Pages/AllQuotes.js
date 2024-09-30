import React, { useEffect, useState } from 'react'
import Quote from '../Quote/Quote';
import axios from 'axios';
import styles from'./AllQuotes.module.css'

const AllQuotes = () => {

    let [quotes , setQuotes] = useState([]); //when we change the value of a variable in the code it is not reflected upon the server(ie. value change hoti hai par aapka component render nhi hota) so we have to use useState to set the value of the variable

    async function getQuotes(){
        try{
        let res = await axios.get(`https://quotesapp-f45q.onrender.com/allquotes`);
        setQuotes(res.data);
        }
        catch(e){
            console.error("error getting allquotes" , e);
        }
    }

    useEffect(()=>{
        getQuotes();
    }  , [])


  return (
    <div className={styles.all}>
        <h1>Quotes</h1>
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