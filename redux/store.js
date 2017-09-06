import {applyMiddleware, createStore, compose} from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from "./reducers/index";

let finalCreateStore = compose(
    applyMiddleware(createLogger())
)(createStore)

export default function configureStore(initialState = { todos: [], user: {} }){
    return finalCreateStore(rootReducer, initialState )
}