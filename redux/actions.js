let actions = {

     addToDo: (text) => {
        return {
            type: 'ADD_TODO',
            text: text
        }
    },
    completeToDo: (id) => {
         return {
             type: 'COMPLETE_TODO',
             id: id
         }
    },
    deleteToDo: (id) => {
        return {
            type: 'DELETE_TODO',
            id: id
        }
    },
    createNewUserID: () => {
        return {
            type: 'NEW_USER_ID',
            id: Math.floor(Math.random() * (50 - 10 + 1)) + 10
        }
    }

}

export default actions