import * as api from '../api';

export const googleLogIn = (data) => {
    return {
        type:'AUTH',
        payload:data
    }
}

export const logout = () => {
    return {
        type:'LOGOUT'
    }
}

export const signup = (inputValue,router) => async (dispatch) => {
    try {
        const {data} = await api.signUp(inputValue);
        dispatch({
            type:'AUTH',
            payload:data
        })
        router.push('/users/signin') 
    } catch (error) {
        console.log(error)
    }
}

export const signin = (inputValue,router) => async (dispatch) => {
    try {
        const {data} = await api.signIn(inputValue);
        dispatch({
            type:'AUTH',
            payload:data
        })
        router.push('/')
    } catch (error) {
        console.log(error)
    }
}