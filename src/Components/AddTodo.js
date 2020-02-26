import React, { Component } from 'react'

export class AddTodo extends Component {
    constructor(){
        super();
        this.state = {
            title: ''
        }
    }
    onChange = (e) =>{  
        this.setState({
            title: e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ""})
    }
    render() {
        return (
            <form style={{display: "flex", flexDirection: "column"}} onSubmit = {this.onSubmit}>
                <input type="text" name= "title" placeholder="Add Todo ..." style={{flex: '10', padding: '10px'}}
                onChange = {this.onChange}
                value={this.state.title}/>
                <input type="submit" className="btn" style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddTodo
