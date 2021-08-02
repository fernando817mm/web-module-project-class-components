import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/todo.css';

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: todoList
    }
  }

  handleAddTask = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  }

  handleCompleted = id => {
    this.setState({
      todoList: this.state.todoList.map(e => {
        return e.id === id ? ({...e, completed: !e.completed}) : e;
      })
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter(e => {
        return (e.completed === false);
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList todoList = {this.state.todoList} handleCompleted = {this.handleCompleted} />
        <TodoForm handleAddTask = {this.handleAddTask} handleClear = {this.handleClear} />
      </div>
    );
  }
}

export default App;
