import React from 'react';

const Todo = (props) => {

    let {item:todo}=props;
    return (
        <div>
            <hr/>
            <h4>User ID: {todo.userId}, ID: {todo.id}</h4>
            <p>Title: {todo.title}</p>

        </div>
    );
};

export default Todo;