import {makeStyles} from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    container:{
        minHeight:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    imageContainer:{
        height:'99vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        [theme.breakpoints.down('sm')] : {
            display:'none'
        }
    },
    image:{
        height:'100%',
        width:'100%',
        objectFit:'contain'
    },
    formContainer:{
        height:'99vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        textTransform:'uppercase'
    },
    form:{
        margin:'20px 0 30px',
        width:'75%',
        [theme.breakpoints.down('md')] : {
            width:'85%',
        }
    },
    Button:{
        margin:'10px 0'
    },
}))