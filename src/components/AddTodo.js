import React, { Component } from 'react';
import propTypes from 'prop-types';

export class AddTodo extends Component {

  state = {
    title: ''
  }

  changeInput = (event) => {
    this.setState({
      /* for case when we have a bunch of inputs like pwd, login, phone etc., we can use target name attr */
      [event.target.name] : event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ''
    })
  }

  render() {

    return (
      <div>
        <form style={formStyle} onSubmit={this.submitForm}>
          <input type='text' style={inputStyle} onChange={this.changeInput} placeholder='Add todo item' value={this.state.title} name='title'></input>
          <button type='submit' style={buttonStyle}>Add</button>
        </form>
      </div>
    )
  }

}


AddTodo.propTypes = {
  addTodo: propTypes.func.isRequired
};


const formStyle = {
  display: 'flex'
};

const inputStyle = {
  flex: '7',
  height: '2em',
  fontSize: '1.5em',
  outline: 'none',
  padding: '0 1em'
};

const buttonStyle = {
  flex: '3',
  cursor: 'pointer',
  fontSize: '2em',
  outline: 'none',
  background: '#6ab04c',
  color: '#fff',
  border: 'none'
}

export default AddTodo
