function getId(todos) {
    return todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    }, -1 ) + 1

}


let todosReducer = function(todos = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return Object.assign([], todos, [{
                    text: action.text,
                    completed: false,
                    id: getId(todos)
                }, ...todos
                ],
            )
        case 'COMPLETE_TODO':
            return Object.assign([], todos,
                todos.map((todo) => {
                    return todo.id === action.id ? Object.assign({},todo, {completed: !todo.completed}) : todo
                })
            )
        case 'DELETE_TODO':
            return Object.assign([],
                todos.filter((todo) => {
                    return todo.id !== action.id
                })
            )
        default:
            return todos;
    }
}

export default todosReducer