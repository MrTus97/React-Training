import React from 'react';
import Button from '@atlaskit/button'
import Todo from './Todo';
function TodoList(props) {
    return (
        <>
        {
            props.todoList.map(todo => <Todo key={todo.id} todo={todo}/>)
        }
           
        </>
    );
}

export default TodoList;