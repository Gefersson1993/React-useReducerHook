
import React from 'react';
import './examples.css';
import { useFetch } from '../../Hooks/useFetch';
import { useCounter } from '../../Hooks/useCounter';

export const MultipleCustomHooks = () => {

    const{counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];
    
    // console.log(author, quote);

    return (
        <div>
            <h1>Breaking Bad Personajes: </h1>
            <hr/>
            {
                loading ?
                (
            <div className="alert alert-info text-center">
                Loading...
            </div>
                )
                :
                (
            <blockquote className="blockquote text-right">
                <p className="mb=0">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
                )
            }

            <button onClick={increment} className="btn btn-primary">Next quote</button>
        </div>
    )
}

