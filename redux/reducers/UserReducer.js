let userReducer = function(user = {}, action) {
    switch(action.type) {
        case 'NEW_USER_ID':
            return Object.assign({}, user,
                {
                    username: user.username,
                    id: action.id
                }
            )
        default:
            return user;
    }
}

export default userReducer