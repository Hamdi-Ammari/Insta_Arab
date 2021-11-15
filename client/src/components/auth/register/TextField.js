import React from 'react';
import { ErrorMessage,useField } from 'formik';
import {TextField, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    inValid:{
        border:'.5 solid #dc3545'
    },
    errorMsg:{
        color:'#F44336',
        fontSize:'.8rem'
    },
}))

const InputField = ({...props}) => {
    const classes = useStyles();
    const [field,meta] = useField(props)
    return(
        <div>
            <Typography variant="subtitle">
                <ErrorMessage component='div' className={classes.errorMsg} name={field.name}/>
            </Typography>
            <TextField size='small' {...field} error={meta.touched && meta.error && true} className={meta.touched && meta.error && classes.inValid} name={props.name} type={props.type} id={props.id} label={props.label} placeholder={props.placeholder} autoComplete='off' fullWidth variant='outlined' margin='normal'/>
        </div>
    )
}

export default InputField;