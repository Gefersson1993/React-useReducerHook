
import React, { useEffect } from 'react';
import './Effect.css';
import { useForm } from '../../Hooks/useForm';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password:''
    });

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('Password cambio');
    }, [password]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}> 
            <h1>FormWithCustomHook</h1>
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

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="**********"
                    value={password}
                    onChange={handleInputChange}
                ></input>
            </div>

            <button type="submit" className="btn btn-primary">AGREGAR</button>
        </form>
        
    )
}
