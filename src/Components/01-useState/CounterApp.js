import React, { Fragment, useState } from 'react';
import './Counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1 : 10,
        counter2 : 18,
        counter3 : 27,
        counter4 : 30,
        counter5 : 33

    });
    // console.log(counter1);
    const {counter1, counter2} = state;

    return (
        <Fragment>
            <h1>counter1 {counter1}</h1>
            <h1>counter2 {counter2}</h1>
            <hr></hr>
            <button className="btn btn-primary"
            onClick={ () => {
                setState({
                    //operador express
                    ...state,
                    counter1: counter1+1
                })
            }}>+1</button>
           
        </Fragment>
    )
}
