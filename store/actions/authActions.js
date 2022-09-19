import axios from 'axios'
import Types from '../types/Type'
import jwt_decode from "jwt-decode";
import setAuthToken from '../../utilities/setAuthToken';

export const register = user => async dispatch => {
    try {
        const response = await axios.post('/users/register', user)
        const token = response.data.token
        setAuthToken(token)
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
    try {
        const response = await axios.post('/users/login', user)
        const token = response.data.token
        localStorage.setItem('token', token)
        setAuthToken(token)
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

export const home = () => async dispatch => {
    try {
        const res = await axios.get('/users')
        dispatch({
            type: Types.SET_USER,
            payload: res.data.user
        })

    } catch (error) {
        dispatch({
            type: Types.ERROR,
            payload: {}
        })
    }
}