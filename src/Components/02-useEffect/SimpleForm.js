
import React, { Fragment , useEffect, useState} from 'react';
import './Effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect( () => {
        // console.log('Hey my friend');
    }, [] );

    useEffect( () => {
        // console.log('formState cambio');
    }, [formState] );
    
    useEffect( () => {
        // console.log('email cambio');
    }, [email] );

    const handleInputChange = ( {target} ) => {
        
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }
    
    return (
        <Fragment>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                ></input>
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="ej:email@outlook.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                ></input>
            </div>

            {(name === 'Geff') && <Message/>}
        </Fragment>
    )
}
