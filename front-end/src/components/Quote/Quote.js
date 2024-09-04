import React from 'react'
import styles from './Quote.module.css';
import { useNavigate } from 'react-router-dom';

const Quote = (props) => {

  const navigate = useNavigate();
  const showQuoteHandler = (id)=>{
   navigate(`/quote/${id}`);
  }
  return (
    <li className={styles.quote}>
        <span>
            <p>{props.text}</p>
            <h3>{props.author}</h3>
        </span>
        <button onClick={()=>showQuoteHandler(props.id)}>view Full quote</button>
    </li>
  )
}

export default Quote