import React, { Fragment } from 'react';
import {useCounter} from '../../Hooks/useCounter';
import './Counter.css';

export const CounterWithCustomHook = () => {
    const {state, increment, decrement, reset}=useCounter(100);
    return (
        <Fragment>
            <h1>Counter with Hook: {state} </h1>
            <hr></hr>
            <button onClick = {()=>increment(100)} className="btn btn-primary">Aumenta</button>
            <br></br>
            <button onClick = {()=>decrement(5)} className="btn btn-success">Disminuye</button>
            <br></br>
            <button onClick = {reset} className="btn btn-danger">Resetear</button>
        </Fragment>
    )
}
