import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './ShowQuote.module.css'

const ShowQuotes = () => {

    const params = useParams();

    let [quote , setQuote] = useState({
        author:'',
        text:''
    })

    async function fetchQuote(){
        let res = await axios.get(`https://quotesapp-f45q.onrender.com/quote/${params.id}`);
        let {author , text} = res.data;
        // console.log(author);
        // console.log(text);
        setQuote({author , text});
        // console.log(quote);
    }

    useEffect(()=>{
        fetchQuote();
    } , []);
  return (
    <div className={styles.show}>
        <p>{quote.text}</p>
        <h4>{quote.author}</h4>
    </div>
  )
}

export default ShowQuotes