import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    container:{
        minHeight:'100vh',
        minWidth:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    subContainer1:{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center'
    },
    imageDiv:{
        height:'90vh',
        width:'35%',
    },
    image:{
        height:'100%',
        width:'100%',
        objectFit:'cover'
    },
    formDiv:{
        height:'100%',
        width:'40%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    signIn:{
    },
    singText:{
        fontSize:'26px',
    },
    form:{
        margin:'20px 0 30px',
    },
    Button:{
        margin:'10px 0'
    },
    firstName:{
        marginRight:'45px'
    }
}))