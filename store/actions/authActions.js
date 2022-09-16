import axios from 'axios'

export const register = user => async dispatch =>{
    console.log({user, dispatch})
    try{
        const response = await axios.post('/users/register', user)
        console.log(response)
        // dispatch({
        //     type: 'REGISTER',
        //     payload: response.data
        // })
    }catch(error){
        console.dir(error)
    }
}