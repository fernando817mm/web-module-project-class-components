import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }
    handleChanges = e => {
        this.setState({
            ...this.state,
            inputValue: e.target.value
        });
    };

    handleClick = e => {
        e.preventDefault();
        this.props.handleAddTask(this.state.inputValue);
        this.setState({
            inputValue: ''
        });
    }

    render(){
        return(
            <div>
                <form>
                    <input
                        type = 'text'
                        name = 'todo'
                        value = {this.state.inputValue}
                        placeholder = 'Task'
                        onChange = {this.handleChanges}
                    />
                    <button onClick = {this.handleClick}>Add Task</button>
                </form>
                <button onClick = {this.props.handleClear}>Clear Completed</button>
            </div>

        )
    }
}

export default TodoForm;