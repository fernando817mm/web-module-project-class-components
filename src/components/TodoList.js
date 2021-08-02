import React from "react";
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    const { todoList, handleCompleted } = props;
    return (
        <div>
            <h1>Todo App</h1>
            {
                todoList.map(e => {
                    return <Todo item = {e} key = {e.id} handleCompleted = {handleCompleted} />
                })
            }
        </div>
    )
}

export default TodoList;
