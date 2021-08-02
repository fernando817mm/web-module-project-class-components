import React from 'react';

const Todo = props => {
    const { item, handleCompleted } = props;

    const handleClick = (e) => {
        handleCompleted(item.id);
    }

    return (
        <div onClick = {handleClick} className = {`item${item.completed ? ' completed' : ''}`}>
            <p>{item.task}</p>
        </div>
    )
}

export default Todo;