import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Avatar,AppBar,Toolbar,IconButton,Typography, Button} from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
//import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import {logout} from '../../../actions/auth';
import {popUpOn} from '../../../actions/popUp';
import useStyles from './styles';


const Header = () => {
    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [toggleBar,setToggleBar] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleToggleBar = () => {
        setToggleBar((prevToggle) =>!prevToggle)
    }
    const submitHandler = () => {

    }
    const logoutHandler = () => {
        dispatch(logout());
        history.push('/auth/login');
        setUser(null);
    }
    const PostPopUpHandler = () => {
        dispatch(popUpOn());
    }
    return(
        <AppBar className={classes.headerContainer} position="fixed">
            <Toolbar>
                <Typography className='title' variant='h4'>insta Arab</Typography>
                <div className='iconsDiv'>
                    <form onSubmit={submitHandler}>
                        <IconButton type='submit'>
                            <HomeRoundedIcon className={classes.icon}/>
                        </IconButton>
                    </form>
                    <IconButton onClick={PostPopUpHandler}>
                        <AddCircleOutlineIcon className={classes.icon}/>
                    </IconButton>
                    <div className={classes.menu}>
                        <IconButton onClick={handleToggleBar}>
                            <Avatar className={classes.avatar} alt={user?.result?.name} src={user?.result?.imageUrl}/>
                        </IconButton>
                        <div className={toggleBar? classes.menuItemsOn : classes.menuItemsOff }>
                            <div className={classes.info}>
                                <Avatar className={classes.toggleBarAvatar} alt={user?.result?.name} src={user?.result?.imageUrl}/>
                                <Typography variant='subtitle1'>{user?.result?.name}</Typography>
                                <Typography variant='caption'>{user?.result?.email}</Typography>
                            </div>
                            <div className={classes.logoutDiv}>
                                <Button fullWidth variant='outlined' className={classes.logoutBtn} onClick={logoutHandler}>Deconnexion</Button>
                            </div>
                            <span className={classes.triangle}></span>
                        </div>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;