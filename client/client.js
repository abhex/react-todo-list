import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import configureStore from "../redux/store"
import { Provider } from 'react-redux'

let initialState = {
    todos: [
        {
            id: 1, completed: false, text: "I need to do my Laundry"
        }
    ],
    user: {
        username: 'Abdul', id: 21
    }
}

let store = configureStore(initialState)
// Configure and create our Store

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app')
)



