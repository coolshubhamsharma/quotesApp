import React, { useRef } from 'react'
import styles from './NewQuotes.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewQuotes = () => {

  let navigate = useNavigate();

  let usernameInputRef = useRef();
  let quoteInputRef = useRef();

   const addQuoteHandler = async(e)=>{
    e.preventDefault();//stops the form from getting submited
    const author = usernameInputRef.current.value;
    const text = quoteInputRef.current.value;
    try{
      console.log(author);
      console.log(text);
      let res = await axios.post('https://quotesapp-f45q.onrender.com/addquotes' , {author,text} , {
        headers: {
          'Content-Type': 'application/json'}});
      console.log(res);
      navigate('/');
    }
    catch(e){
      console.log('cannot create a new quote at this moment' , e);
    }
   }

  return (
    <form onSubmit={addQuoteHandler} className={styles['new-quote-form']}>

        <div>
          <h1>Add Your Quote</h1>
        </div>

        <div>
            <h2><label htmlFor="author">Author</label></h2>
            <input type="text" id='author' ref={usernameInputRef} placeholder="Author's Name"/>
        </div>

        <div>
            <h2><label htmlFor="quote">Text</label></h2>
            <textarea name='' id='quote' cols={15} rows={4} ref={quoteInputRef} placeholder=" Quote"/>
        </div>

        <button>Add Quote</button>
    </form>
  )
}

export default NewQuotes