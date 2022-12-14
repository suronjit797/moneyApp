import axios from 'axios'
import Types from '../types/Type'
import Swal from 'sweetalert2'

export const getTransition = (filter) => async dispatch => {
    const { month, year } = filter
    try {
        const res = await axios.get(`/transition?month=${month}&year=${year}`)
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

// remove 
export const deleteTransition = id => async dispatch => {

    try {
        const res = await axios.delete(`/transition/${id}`)
        if (res.data) {
            Swal.fire({
                icon: 'success',
                text: 'Transition Delete Successfully',
            })
        }
        dispatch({
            type: Types.SET_USER,
            payload: res.data.user
        })

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