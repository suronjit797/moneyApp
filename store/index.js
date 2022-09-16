import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

const middleware = [thunk]
const enhancer = composeWithDevTools(applyMiddleware(...middleware))

const store = createStore(rootReducer, enhancer)

export default store