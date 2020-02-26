import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItems extends Component {
    getStyle = () => {
        return {
            background: '#ffe3ed',
            padding: '10px',
            borderBottom:'1px solid black',
            textDecoration: this.props.todo.completed ? 'line-through' :('none')
        }
    }
     
    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.ID)}/>
                    {this.props.todo.todo}
                    <button style={btnStyle} onClick={this.props.delete.bind(this, this.props.todo.ID)}>X</button>
                </p>
            </div>
        )
    }
}

export default TodoItems

const btnStyle={
    background: "#ff0000",
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
TodoItems.propTypes = {
    todo: PropTypes.object.isRequired
}