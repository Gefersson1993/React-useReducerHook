import React, { useState, useMemo } from 'react';
import {useCounter} from '../../Hooks/useCounter';
import './memorize.css';
import { procesoPesado } from '../../Helpers/procesoPesado';

export const MemoHook = () => {

    const {counter, increment} = useCounter(100);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <>
          <h1>Memo Hook</h1>
          <h3>Counter: <small>{counter}</small></h3>
          <hr/>

          <p>{memoProcesoPesado}</p>
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

