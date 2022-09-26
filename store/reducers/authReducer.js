import Types from "../types/Type"

const init = {
    isAuthenticated: false,
    user: {},
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
        case Types.ERROR:
            return {
                user: {},
                error: action.payload,
                isAuthenticated: false,
            }
        case Types.HOME_ERROR:
            return {
                user: {},
                error: action.payload,
                isAuthenticated: false,
            }
        default:
            return state
    }
}

export default authReducer;