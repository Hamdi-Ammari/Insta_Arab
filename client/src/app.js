import React,{useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/home/Home';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';

import {getPosts} from './actions/posts';

const App = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getPosts());
    },[dispatch,history]);

    return(
    <Router>
        <Switch>
            <PrivateRoute path='/' exact component={Home}/>
            <Route path='/auth/register' exact component={Register}/>
            <Route path='/auth/login' exact component={Login}/>
        </Switch>
    </Router>
    )
}

export default App;