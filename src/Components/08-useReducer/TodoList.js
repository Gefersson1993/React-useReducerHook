import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        // TodoList,todos,handleDelete,handleToggle
        <ul className="list-group-flush">
            {
                todos.map( (todo,i) => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        index={i}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))
            }       
        </ul>
    )
}
