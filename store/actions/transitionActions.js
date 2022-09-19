import axios from 'axios'
import Types from '../types/Type'
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2'


export const getTransition = () => async dispatch => {
    try {
        const res = await axios.get('/transition')
        console.log(res.data.data)
        dispatch({
            type: Types.SET_TRANSITION,
            payload: res.data.data
        })

    } catch (error) {
        dispatch({
            type: Types.TRANSITION_ERROR,
            payload: {}
        })
    }
}


export const createTransition = transition => async dispatch => {
    try {
        const res = await axios.post('/transition', transition)
        if (res.data) {
            Swal.fire({
                icon: 'success',
                title: 'Yeah...',
                text: 'Transition create successfully',
            })
        }
        dispatch({
            type: Types.SET_USER,
            payload: res.data.user
        })

        return res.data.user
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