import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';

export class App extends Component {
  constructor()
  {
    super();

    this.state = {
      todos: [
        
      ]
    }
  }
  markComplete = (id) =>{
    this.setState({
      todos: this.state.todos.map((todo)=>{
        if(todo.ID === id)
        {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }
  delete = (id) =>{
    console.log(id)
    this.setState({
      todos: [...this.state.todos.filter((todo)=>todo.ID !== id)]
    })
  }

  addTodo = (e) =>{
    const newTodo ={
      ID: uuid.v4(),
      todo: e,
      completed: false
     }
      this.setState({todos: [...this.state.todos, newTodo]})
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo = {this.addTodo}/>
          <Todos todos={this.state.todos} markComplete = {this.markComplete} delete  = {this.delete}/>
        </div>
        
      </div>
    )
  }
}

export default App
