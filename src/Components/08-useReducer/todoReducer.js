
export const todoReducer = (state = [ ], action) => {
    //añadir un nuevo todo
    switch (action.type) {
        // si le pones un espacio en los case se va directo al default 
        case 'add':
            return [...state, action.payload];

        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        
        // Forma Corta
        case 'toggle':
            //return implicito
            return state.map(todo => 
                (todo.id === action.payload)
                ?{...todo, done: !todo.done}
                :todo);
                
        // Forma larga
        case 'toggle-large':
            
            return state.map(todo=>{
                if(todo.id===action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }else{
                    return todo;
                }
            })
           
             
        default:
            return state;
    }
}
