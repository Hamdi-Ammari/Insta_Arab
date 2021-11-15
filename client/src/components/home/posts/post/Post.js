import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import moment from 'moment';
import {v4 as uuidv4} from 'uuid';
import {Container,Paper,Typography,Avatar,IconButton,Button} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from './styles';
import {likePost} from '../../../../actions/posts';
import {addCurrentId} from '../../../../actions/currentId';
import { popUpOn } from '../../../../actions/popUp';
import { deletePost } from '../../../../actions/posts';
import { addComment } from '../../../../actions/posts';


const Post = ({post}) => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [toggleBar,setToggleBar] = useState(false);
    const [commentValue,setCommentValue] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const userId = user?.result?._id || user?.result?.googleId;
    const findId = post.likes.findIndex(id => id === userId);
    
    const handleToggleBar = async () => {
        setToggleBar((prevToggle) =>!prevToggle)
    }
    const updatePost = () => {
        dispatch(popUpOn());
        dispatch(addCurrentId(post._id))
    }

    const deletePostHandler = async () => {
        dispatch(deletePost(post._id));
        history.push('/')
    }

    const addLikeHandler = async () => {
       dispatch(likePost(post._id))
}

    const onChangeHandler = (e) => {
        setCommentValue(e.target.value)
    }
    const addCommentHandler = () => {
        const finalComment = {
            commentName : user?.result?.name,
            commentText : commentValue 
        }
        dispatch(addComment(post._id,finalComment));
        setCommentValue('');
    }
    return(
        <Container maxWidth="sm" className={classes.PostsDiv}>
            <Paper variant="outlined" className={classes.postPaper}>
                <div className={classes.postHead}>
                    <Avatar className={classes.Avatar} src={post?.imageUrl}  alt={post?.name}/>
                    <Typography className={classes.userName} variant='h5'>{post?.name}</Typography>
                    {post.creator === userId ? (
                        <IconButton onClick={handleToggleBar} className={classes.postMoreIconButton}>
                            <MoreHorizIcon flex='end' className={classes.postMoreIcon}/>
                        </IconButton>
                    ) : null}
                    <div className={toggleBar? classes.menuItemsOn : classes.menuItemsOff }>
                            <Button onClick={updatePost} fullWidth>Update Post</Button>
                            <form onSubmit={deletePostHandler}>
                                <Button type='submit' fullWidth>Delete Post</Button>
                            </form>
                            <span className={classes.triangle}></span>
                    </div>
                </div>
                <div>
                    <img className={classes.postPhoto} src={post.selectedFile} alt={'hello'}/>
                </div>
                <div className={classes.postIcons}>
                    <IconButton className={classes.likeButton} onClick={addLikeHandler}>
                        {findId === -1 ? (
                            <FavoriteBorderIcon className={classes.disLiked} fontSize='small'/>
                        ) : (
                            <FavoriteIcon fontSize='small' className={classes.liked}/>
                        )}
                    </IconButton>
                    &nbsp;<Typography className={classes.likesNumber} variant='h6'>{post.likes.length}</Typography>
                    &nbsp;<Typography className={classes.likesNumber} variant='h6'>
                        {post.likes.length === 0 || post.likes.length > 1 ? 'likes' : 'like'}
                        </Typography>
                </div>
                <div className={classes.postTags}>
                    <Typography className={classes.userName} variant='h5'>{post.name}</Typography>
                    <Typography className={classes.tags} variant='h5'>{post.message}</Typography>
                </div>
                <div className={classes.commentsContainer}>
                    <div className={classes.commentCounter}>
                        <Typography variant='h5' className={classes.commentsNumber}>{post.comments.length}</Typography>&nbsp;
                        <Typography variant='h5' className={classes.commentsNumber}>{post.comments.length === 0 || post.comments.length > 1 ? 'comments':'comment'}</Typography>
                    </div>
                    {post.comments.length > 0 ? (
                        <div className={classes.commentsSubContainer}>
                            {post.comments.map(c => (
                                <div className={classes.postComments} key={uuidv4()}>
                                    <Typography className={classes.userName} variant='h5'>{c.commentName}</Typography>
                                    <Typography className={classes.comment} variant='h5'>{c.commentText}</Typography>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
                <div className={classes.postCreatedAt}>
                    <Typography className={classes.createdAt} variant='h5'>{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.addCommentDiv}>
                    <input onChange={onChangeHandler} type='text' placeholder='add comment ...' value={commentValue} className={classes.commentInput}/>
                    <Button onClick={addCommentHandler} color='primary' disabled={!commentValue} className={classes.commentBtn}>publish</Button>
                </div>
            </Paper>
        </Container>
    )
}
export default Post;