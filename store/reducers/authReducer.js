import Types from "../types/Type"

const init = {
    isAuthenticated: false,
    user: {},
    error: {}
}

const counterReducer = (state = init, action) => {
    switch (action.type) {
        case Types.REGISTER:
            return {
                user: action.payload.user,
                isAuthenticated: true,
                error:{}
            }
        default:
            return state
    }
}