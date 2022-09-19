import { combineReducers } from 'redux'
import authReducer from './authReducer'
import transitionsReducer from './transitionsReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    transition: transitionsReducer
})

export default rootReducer