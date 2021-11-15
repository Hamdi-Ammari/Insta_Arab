import React from 'react';
import {useSelector} from 'react-redux';
import Post from './post/Post';
import useStyles from './styles';


const Posts = () => {
    const classes = useStyles();
    const allPosts = useSelector(state => state.postReducer);
    const sortedPost = allPosts.sort((a,b) => (a.createdAt < b.createdAt ? 1 : -1))

    return(
      <div className={classes.postsContainer}>
      {sortedPost.map((post) =>(
          <Post key={post._id} post={post}/>
      ))}
      </div>
    )
}

export default Posts;