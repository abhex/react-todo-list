import React, { Component } from 'react'
import TodoItem from "./TodoItem";

class TodoList extends Component {


    render(){
        return(
            <ul>{console.log("LIST PROPS", this.props)}
                {this.props.todos.map((todo) => {
                    return <TodoItem  id={todo.id} text={todo.text} completeToDo={this.props.completeToDo} deleteToDo={this.props.deleteToDo} />
                })}
            </ul>
        )
    }
}


export default TodoList