import React, {useState} from 'react';
import Todo from "../todo/Todo";



const Todos = () => {
    let [todos, setTodos]= useState([]);
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(value => value.json())
        .then(value=>{
            setTodos(value);
        });
    return (
        <div>
           <h3>Todos</h3>

            {todos.map((todo, index)=><Todo item={todo} key={index}/>)}
        </div>
    );
};

export default Todos;