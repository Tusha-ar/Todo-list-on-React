import React, { Component } from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

export class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
        <TodoItems key={todo.ID} todo={todo} markComplete = {this.props.markComplete} delete = {this.props.delete}/>
        ))
    }
}


Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos
