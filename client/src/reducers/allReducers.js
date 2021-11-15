import {combineReducers} from 'redux';

import postReducer from './posts';
import popUpReducer from './popUp';
import authReducer from './auth';
import currentIdReducer from './currentId';

export const allReducers = combineReducers({
    postReducer,
    popUpReducer,
    authReducer,
    currentIdReducer
})