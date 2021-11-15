import * as api from '../api';


export const getPosts = () => async (disptach) => {
    try {
        const {data} = await api.getPosts();
        disptach({
            type:'FETCH_ALL',
            payload:data
        })
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (disptach) =>{
 try {
     const {data} = await api.createPost(post);
     disptach({
         type:'CREATE',
         payload:data
     })
 } catch (error) {
     console.log(error)
 }
}

export const updatePost = (id,udatedPost) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id,udatedPost);
        dispatch({
            type:'UPDATE_POST',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async(dispatch) => {
    try {
        const {data} = await api.likePost(id);
        dispatch({
            type:'LIKE',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const addComment = (id,value) => async(dispatch) => {
    try {
        const {data} = await api.addComment(id,value);
        dispatch({
            type:'ADD_COMMENT',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        const {data} = await api.deletePost(id);
        dispatch({
            type:'DELETE',
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

