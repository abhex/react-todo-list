
/**
 * Created by kwanso on 30/01/2017.
 */

import React, { Component } from 'react'

class TodoInput extends Component {

    constructor(props, context){
        super(props, context)
        this.state = {
            inputText: ''
        }
    }

    handleChange(event){
        this.setState({
            inputText: event.target.value
        })
    }


    handleSubmit(event){
        event.preventDefault()
        this.props.addToDo(this.state.inputText)
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="ToDo ..." value={this.state.inputText}
                              onChange={this.handleChange.bind(this)}/>
                    <input type="submit" text="Submit"/>
                </form>
            </div>
        )
    }
}


export default TodoInput
