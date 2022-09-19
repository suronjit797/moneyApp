import Types from "../types/Type"

const init = {
    transition: [],
    error: {}
}

const authReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_USER:
            return {
                user: action.payload,
                error: {},
                isAuthenticated: Object.keys(action.payload).length !== 0,
            }
        default:
            return state
    }
}

export default authReducer;