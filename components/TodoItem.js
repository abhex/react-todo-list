import React, { Component } from 'react'
import actions from "../redux/actions";


class TodoItem extends Component {

    handleCompletion(event){
        event.preventDefault()
        this.props.completeToDo(this.props.id)
    }

    handleDeletion(event){
        event.preventDefault()
        this.props.deleteToDo(this.props.id)
    }

    render(){
        return(
                <li>
                    <div>{this.props.text}</div>
                    <button onClick={this.handleCompletion.bind(this)}>Mark as done!</button>
                    <button onClick={this.handleDeletion.bind(this)}>Delete Todo</button>
                </li>
        )
    }
}

export default TodoItem