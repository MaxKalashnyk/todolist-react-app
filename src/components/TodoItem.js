import React, { Component } from 'react';
import propTypes from 'prop-types';

export class TodoItem extends Component {


  getStyle = () => {

    return {
      
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      backgroundColor: "#efefef",
      padding: "1em",
      borderBottom: "1px solid #949494"
    
    }   

  }

  render() {

    const {id, title} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
          {title}
          <button style={buttonStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  markComplete: propTypes.func.isRequired,
  delTodo: propTypes.func.isRequired
};

const buttonStyle = {
  background: '#ff0000',
  width: '2em',
  height: '2em',
  lineHeight: '2em',
  textAlign: 'center',
  color: '#fff',
  borderRadius: '50%',
  border: 'none',
  float: 'right',
  cursor: 'pointer',
  outline: 'none'
};

export default TodoItem
