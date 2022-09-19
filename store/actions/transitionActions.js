import axios from 'axios'
import Types from '../types/Type'
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2'

export const createTransition = transition => async dispatch => {
    try {
        const res = await axios.post('/transition', transition)
        if (res.data.status) {
            Swal.fire({
                icon: 'success',
                title: 'Yeah...',
                text: 'Transition create successfully',
            })
        }
        return
    } catch (error) {
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Opps...',
                text: 'Transition create failed',
            })
        }
    }
}

export const transitions = () => async dispatch => {
    try {
        const token = localStorage.getItem('token')
        setAuthToken(token)
        const decoded = jwt_decode(token.split(' ')[1])
        dispatch({
            type: Types.SET_USER,
            payload: decoded
        })

    } catch (error) {
        dispatch({
            type: Types.ERROR,
            payload: {}
        })
    }
}