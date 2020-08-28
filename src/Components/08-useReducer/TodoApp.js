import React, { useReducer, useEffect } from 'react';
import './reducer.css';
import { todoReducer } from './todoReducer';
// import { useForm } from '../../Hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
    // codigo para leer del localStorage
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    //usamos el dispatch para mandar una action
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    //usaremos un useEffect para guardar en el localStorage
    useEffect( () => {
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos]);

    const handleDelete = (todoId) => {
        // console.log(todoId);
        //crear la accion
        const action = {
            type: 'delete',
            payload: todoId
        }
        //dispatch
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <>
            <h1>Hola useReducer ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>   
                
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
                
            </div>
            
         
        </>
    )
}
