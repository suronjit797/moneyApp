import { combineReducers } from 'redux'
import authReducer from './authReducer'
import transitionsReducer from './transitionsReducer'
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    transition: transitionsReducer,
    filter: filterReducer,
})

export default rootReducer