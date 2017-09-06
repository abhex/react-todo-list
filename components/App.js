import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import {connect} from 'react-redux'
import actions from '../redux/actions'
import {bindActionCreators} from 'redux'
import UserInfo from "./UserInfo";

class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="app">
                <h1>Todo List</h1>
                <UserInfo createNewUserID={this.props.actions.createNewUserID} user={this.props.user}/>
                <TodoInput addToDo={this.props.actions.addToDo} />
                <TodoList completeToDo={this.props.actions.completeToDo} deleteToDo={this.props.actions.deleteToDo} todos={this.props.todos}/>
            </div>
        )
    }
}

function mapStateToProps(state){
     return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
