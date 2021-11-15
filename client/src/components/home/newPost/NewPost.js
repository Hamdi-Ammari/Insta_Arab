import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import {Typography,Container,Button,IconButton,Avatar} from '@material-ui/core';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import {popUpOff} from '../../../actions/popUp';
import {createPost} from '../../../actions/posts';
import { updatePost } from '../../../actions/posts';
import { removeCurrentId } from '../../../actions/currentId';

const NewPost = () => {
    const classes = useStyles();
    const [postData,setPostData] = useState({message:'',selectedFile:''});
    const user =(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const postState = useSelector(state => state.popUpReducer);
    const currentId = useSelector(state => state.currentIdReducer);
    const post = useSelector(state => currentId ?  state.postReducer.find(p =>p._id === currentId) : null);

    useEffect(() => {
        if(post) setPostData(post)
    },[post])

    const popUpOffHandler = () => {
        dispatch(popUpOff());
        setPostData({message:'',selectedFile:''});
        if(currentId) {
            dispatch(removeCurrentId())
        }
    }

    const addPost = () => {
        if(currentId) {
            dispatch(updatePost(currentId,postData))
        }else{
            dispatch(createPost({...postData, name:user?.result?.name,userImage:user?.result?.imageUrl}));
        }
    }

    
    return (
        <div className={` ${postState? classes.coverDivOn:classes.coverDivOff}`}>
            <Container maxWidth="sm" className={classes.postDiv}>
                <Typography variant='h5' className={classes.title}>{currentId ?'Update Post': 'New Post'}</Typography>
                <hr/>
                <IconButton onClick={popUpOffHandler} className={classes.closeIconBtn}>
                    <HighlightOffIcon className={classes.closeIcon}/>
                </IconButton>
                <div className={classes.user}>
                    <IconButton>
                        <Avatar className={classes.avatar} src={user?.result?.imageUrl} alt={user?.result?.name}/> 
                    </IconButton>
                    <Typography className={classes.userName}>{user.result.name}</Typography>
                </div>
                <form onSubmit={addPost} className={classes.form}>
                    <textarea value={postData.message} placeholder={`what's in your mind ${user.result.name}`} className={classes.textInput} type='text' onChange={(e) =>setPostData({...postData,message:e.target.value})}/>
                    <div className={classes.photoInputDiv}>
                        <FileBase className={classes.photoInput} type='file' multiple={false} onDone={({base64}) =>setPostData({...postData,selectedFile:base64})}/>
                        <div className={classes.addPhoto}>
                            <Typography className={classes.addPhotoText} variant='h6'>Add Photo</Typography>&nbsp;
                            <InsertPhotoOutlinedIcon/>
                        </div>
                    </div>
                    <Button disabled={postData.selectedFile ? false:true} type='submit' fullWidth color='primary' variant='contained'>Publish</Button>
                </form>
            </Container>
        </div>
    )
}

export default NewPost
