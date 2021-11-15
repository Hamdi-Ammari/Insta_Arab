import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import {Container,Typography,TextField,Button} from '@material-ui/core';
import useStyles from './styles';
import authPhoto from '../../../photos/authPhoto2.jpg';

import Icon from '../Icon';
import {googleLogIn,signin} from '../../../actions/auth';

const SignIn = () => {
    const classes = useStyles();
    const [inputValue,setInputValue] = useState({email:'',password:''});
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
        setInputValue({...inputValue,[e.target.name] : e.target.value});
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(signin(inputValue));
            setTimeout(() => {
                history.push('/')
            },2000)
        } catch (error) {
            console.log(error)
        }
    }

    const onSuccessHandler = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch(googleLogIn({result,token}))
            history.push('/');
        } catch (error) {
            console.log(error)
        }
    }

    const onFailureHandler = () => {
        console.log("Google sing in failed.Try again please")
    }

    const switchMode = () => {
        history.push('/auth/register')
    }

    return(
        <Container maxWidth='lg' className={classes.container}>
            <Container className={classes.imageContainer}>
                <img className={classes.image} src={authPhoto} alt='auth' />
            </Container>
            <Container className={classes.formContainer}>
                <Typography className={classes.title} align='center'>Login</Typography>
                <form className={classes.form} onSubmit={submitHandler}>
                    <TextField size='small' name='email' onChange={handleChange} type='text' id='email' label='Email Adress' variant='outlined' required fullWidth autoFocus autoComplete='false' margin='normal'/>
                    <TextField size='small' name='password' onChange={handleChange} type='password' id='password' label='Password' variant='outlined' required autoComplete='false' fullWidth margin='normal'/>
                    <Button type='submit' variant='contained' color='primary' fullWidth className={classes.Button}>
                        Sing In
                    </Button>
                    <GoogleLogin 
                        clientId='936277137310-ueim5u546b0nfl03j9umf2faqjgog53a.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button color='primary' fullWidth variant='contained' onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>}>
                                Google Sing In
                            </Button>
                        )}
                        onSuccess={onSuccessHandler}
                        onFailure={onFailureHandler}
                        cookiePolicy='single_host_origin'
                    />
                    <Button variant='outlined' color='primary' fullWidth type="submit" className={classes.Button} onClick={switchMode}>
                            Don't have an accound ? Sing Up
                    </Button>
                </form>
            </Container>
        </Container>
    )
}

export default SignIn;