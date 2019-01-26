import React, { Component } from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

export class Todos extends Component {

  render() {

    const todoItems = this.props.todos.map(todo => {
        return <TodoItem key={todo.id.toString()} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>  
    });

    return (
      <div>
        {todoItems}
      </div>
    )
  }
}

Todos.propTypes = {
    todos: propTypes.array.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired
};

export default Todos
