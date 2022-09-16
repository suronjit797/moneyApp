import axios from 'axios'
import Types from '../types/Type'
import jwt_decode from "jwt-decode";

export const register = user => async dispatch => {
    console.log({ user, dispatch })
    try {
        const response = await axios.post('/users/register', user)
        const token = response.data.token
        localStorage.setItem('token', token)
        const decoded = jwt_decode(token);
        dispatch({
            type: Types.SET_USER,
            payload: decoded
        })
    } catch (error) {
        dispatch({
            type: Types.ERROR,
            payload: error.response.data.message
        })
    }
}
export const login = user => async dispatch => {
    console.log({ user, dispatch })
    try {
        const response = await axios.post('/users/login', user)
        const token = response.data.token
        localStorage.setItem('token', token)
        const decoded = jwt_decode(token.split(' ')[1])
        dispatch({
            type: Types.SET_USER,
            payload: decoded
        })
    } catch (error) {
        dispatch({
            type: Types.ERROR,
            payload: error.response.data.message
        })
    }
}