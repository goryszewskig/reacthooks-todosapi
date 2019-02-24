import React from 'react';

const TodosContext = React.createContext({
    todos: [
        // {id: 1, text:"Eat brekfest", complete: false},
        // {id: 2, text:"Do loundrt", complete: false},
        // {id: 3, text:"finish proj", complete: true},
    ],
    currentTodo: {}

})


export default TodosContext;
