import {makeStyles} from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    headerContainer :{
            background:'#fff',
            boxShadow:'none',
            borderBottom:'1px solid #DBDBDB',
            width:'100%',
            height:'10vh',
        },
            input :{
                padding:'5px',
                background:'#FAFAFA',
                border:'1px solid #DBDBDB',
                outline:'0',
                textAlign:'center'
            },
        [theme.breakpoints.down('sm')] : ({
            input :{
                display:'none'
            }
        }),
        icon:{
            fontSize:'1.65rem'
        },
        menu:{
            color:'black',
            height:'100%',
            position:'relative',
        },
        avatar :{
            width:'28px',
            height:'28px',
            marginLeft:'10px',
            cursor:'pointer',
        },
        menuItemsOn:{
            position:'absolute',
            top:'55px',
            left:'-150px',
            minWidth:'200px',
            minHeight:'220px',
            background:'#fff',
            border:'1px solid #DBDBDB',
            borderRadius:'7px',
            boxShadow:'1px 1px 5px #DBDBDB',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center'
        },
        menuItemsOff:{
            display:'none'
        },
        info:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            paddingTop:'15px'
        },
        toggleBarAvatar:{
            width:'60px',
            height:'60px',
        },
        logoutDiv:{
            width:'100%'
        },
        logoutBtn:{
            width:'100%',
            padding:'10px 0'
        },
        triangle:{
            width:'20px',
            height:'10px',
            borderRadius:'3px',
            position:'absolute',
            top:'-10px',
            left:'165px',
            borderBottom:'10px solid #DBDBDB',
            borderRight:'10px solid transparent',
            borderLeft:'10px solid transparent',
        }
}))

