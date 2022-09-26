import Types from "../types/Type"
import moment from 'moment'

const init = { month: moment().format('MM'), year: moment().format('YYYY') }

const filterReducer = (state = init, action) => {
    switch (action.type) {
        case Types.SET_DATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default filterReducer;