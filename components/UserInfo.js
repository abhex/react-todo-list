import React, { Component } from 'react'

class UserInfo extends Component {

    handleNewId(event){
        event.preventDefault()
        this.props.createNewUserID()
    }

    render(){
        return(
            <div>
                <div> Hello {this.props.user.username}</div>
                <div> Id {this.props.user.id}</div>
                <button onClick={this.handleNewId.bind(this)}>Change To Random ID</button>
            </div>
        )
    }
}


export default UserInfo