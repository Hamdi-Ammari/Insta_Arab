import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;     
    }
    return req;
});

export const getPosts = () => API.get('/');
export const createPost = (post) => API.post('/',post);
export const updatePost = (id,updatedPost) => API.patch(`/${id}`,updatedPost);
export const likePost = (id) => API.patch(`/likePost/${id}`);
export const addComment = (id,value) => API.post(`/addComment/${id}`,{value});
export const deletePost = (id) => API.delete(`/${id}`);
 
export const signUp = (inputValue) => API.post('/auth/register',inputValue);
export const signIn = (inputValue) => API.post('/auth/login',inputValue);