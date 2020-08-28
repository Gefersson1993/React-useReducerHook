import React, { useState } from 'react';
import {useCounter} from '../../Hooks/useCounter';
import './memorize.css';
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <>
          <h1>Memorize:<Small value={counter}/></h1> 
          <hr/>

          <button
          className="btn btn-success"
          onClick={increment}>
              +1
          </button> 

          <button
                className="btn btn-outline-primary ml-3"
                onClick={()=>{
                setShow(!show);
                }}>Show/Hide
          </button>
        </>
    )
}
