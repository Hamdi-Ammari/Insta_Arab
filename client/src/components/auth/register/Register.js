import React from 'react';
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Container,Typography,Button} from '@material-ui/core';
import useStyles from './styles';
import authPhoto from '../../../photos/authPhoto2.jpg';

import InputField from './TextField';

import {signup} from '../../../actions/auth';

const SignUp = () => {

    const validate = Yup.object({
        firstName:Yup.string()
                     .trim('firstName connot include white spaces')
                     .max(15,'Must be 15 characters or less')
                     .min(3,'Must be at least 3 characters')
                     .required('Required'),
        lastName:Yup.string()
                    .trim('lastName connot include white spaces')
                    .max(20,'Must be 20 characters or less')
                    .min(3,'Must be at least 3 characters')
                    .required('Required'),
        email:Yup.string()
                 .email('Email is invalid')
                 .required('Required'),
        password:Yup.string()
                    .min(6,'Password must be at least 6 characters')
                    .required('Required'),
        confirmPassword:Yup.string()
                           .oneOf([Yup.ref('password'),null],'Passwords must match')
                           .required('Required')
    })


    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();


    const submitHandler = async (values) => {

        try {
            dispatch(signup(values,history));
            setTimeout(() => {
                history.push('/auth/login')
            },2000)
        } catch (error) {
            console.log(error)  
        }
    }

    const switchMode = () => {
        history.push('/auth/login')
    }



    return(
        <Container maxWidth='lg' className={classes.container}>
            <Container className={classes.imageContainer}>
                <img className={classes.image} src={authPhoto} alt='auth' />
            </Container>
            <Formik
                initialValues={{
                    firstName:'',
                    lastName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                }}
                validationSchema={validate}
                onSubmit={values => submitHandler(values)}
             >
                {formik => (
                     <Container className={classes.formContainer}>
                        <Typography variant='h6' className={classes.title} align='center'>Sign up</Typography>               
                        <Form className={classes.form}>
                            <InputField name='firstName' type='text' id='firstName' label='First Name' autoFocus/>
                            <InputField name='lastName' type='text' id='lastName' label='Last Name'/>
                            <InputField name='email' type='text' id='email' label='Email Adress'/>
                            <InputField name='password' type='password' id='password' label='Password'/>
                            <InputField name='confirmPassword' type='password' id='confirmPassword' label='Confirm Password'/>  
                            <Button type='submit' variant='contained' color='primary' fullWidth className={classes.Button}>
                                Sing up
                            </Button>
                            <Button variant='outlined' color='primary' fullWidth type="submit" className={classes.Button} onClick={switchMode}>
                                Already have one? Login
                            </Button>
                        </Form>
                    </Container>
                )}
            </Formik>
        </Container>
    )
}

export default SignUp;