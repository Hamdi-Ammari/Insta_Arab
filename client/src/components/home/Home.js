import React from 'react';
import Header from './header/Header';
import Posts from './posts/Posts';
import NewPost from './newPost/NewPost';

const Home = () => {

    return(
        <>
            <Header/>
            <Posts/>
            <NewPost/>
        </>
    )
}
export default Home;