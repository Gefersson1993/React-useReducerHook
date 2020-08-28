
import React, { useRef, useLayoutEffect, useState } from 'react';
import './layout.css';
import { useFetch } from '../../Hooks/useFetch';
import { useCounter } from '../../Hooks/useCounter';

export const LayoutEffect = () => {

    const{counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = !!data && data[0];
    // console.log(author, quote);

    const pTag = useRef();
    const [boxsize, setBoxsize] = useState({});

    useLayoutEffect(() => {
        setBoxsize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>Layout Effects </h1>
            <hr/>
            
               
            <blockquote className="blockquote text-right">
                <p className="mb=0"
                ref={pTag}
                >{quote}</p>
                {/* <footer className="blockquote-footer">{author}</footer> */}
            </blockquote>

            <pre>
                {JSON.stringify(boxsize, null, 3)}
            </pre>       
            <button 
                onClick={increment} 
                className="btn btn-primary">
                Next quote
            </button>
        </div>
    )
}


