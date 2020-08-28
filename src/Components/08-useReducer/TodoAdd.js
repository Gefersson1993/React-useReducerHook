import React, { Fragment } from 'react'
import { useForm } from '../../Hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description:'',
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <=1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false  
        }; 

        handleAddTodo(newTodo);
        reset();
    }   

    return (
        <Fragment>
            <h3>Add TODO</h3>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprendiendo..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}>
                </input>

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block">
                    ADD
                </button>
            </form>
        </Fragment>
        
    )
}
