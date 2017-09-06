import {combineReducers } from 'redux'
import todosReducer from "./TodoReducer";
import userReducer from "./UserReducer";


const rootReducer = combineReducers({
    todos: todosReducer,
    user: userReducer
})

export default rootReducer