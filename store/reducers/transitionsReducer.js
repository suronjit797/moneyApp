import Types from "../types/Type"

const init = {
    transition: [],
    error: {}
}

const transitionsReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_TRANSITION:
            return {
                transition: action.payload,
                error: {},
            }
            case Types.TRANSITION_ERROR:
                return {
                    transition: [],
                    error: action.payload,
                }
        default:
            return state
    }
}

export default transitionsReducer;