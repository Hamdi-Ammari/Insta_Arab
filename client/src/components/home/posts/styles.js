import {makeStyles} from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    postsContainer :{
        marginTop:'100px',
        paddingBottom:'20px'
    },
    [theme.breakpoints.down('sm')] : ({
        postsContainer :{
            marginTop:'70px', 
        },
    }),
}))