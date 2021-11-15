import {makeStyles} from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    PostsDiv :{
        marginTop:'20px', 
        position:'relative'
    },
    [theme.breakpoints.down('sm')] : ({
        PostsDiv :{
            marginTop:'10px', 
        },
    }),
    postPaper:{
        padding:'5px 0'
    },
    postHead:{
        display:'flex',
        alignItems:'center',
        padding:'8px',
        position:'relative',
    },
    Avatar:{
        marginRight:'14px',
        height:'33px',
        width:'33px',
    },
    userName: {
        color:'rgba(38,38,38,1)',
        fontWeight:'600',
        fontSize:'14px',
    },
    postMoreIconButton:{
        position:'absolute',
        right:'15px',
        color:'black'
    },
    menuItemsOn:{
        position:'absolute',
        top:'49px',
        right:'-100px',
        background:'#fff',
        border:'1px solid #DBDBDB',
        borderRadius:'7px',
        boxShadow:'1px 1px 5px #DBDBDB',
        minWidth:'200px',
        padding:'7px 0',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
    },
    menuItemsOff:{
        display:'none'
    },
    triangle:{
        width:'20px',
        height:'10px',
        borderRadius:'3px',
        position:'absolute',
        top:'-10px',
        right:'127px',
        borderBottom:'10px solid #DBDBDB',
        borderRight:'10px solid transparent',
        borderLeft:'10px solid transparent',
    },
    postPhoto:{
        height:'450px',
        width:'100%',
        objectFit: 'cover',
    },
    postIcons:{
        padding:'0 16px',
        display:'flex',
        alignItems:'center'
    },
    likeButton:{
        color:'black',
    },
    disLiked:{
        fontSize:'1.6rem'
    },
    liked:{
        color:'red',
        fontSize:'1.6rem'
    },
    likesNumber:{
        fontSize:'15px',
        fontWeight:'600',
    },
    postTags:{
        padding:'2px 16px',
        display:'flex',
    },
    tags:{
        fontSize:'14px',
        marginLeft:'7px'
    },
    commentsContainer:{
        margin:'7px 0',
        padding:'0 16px',
    },
    commentCounter:{
        display:'flex'
    },
    commentsNumber:{
        padding:'2px 0',
        color: 'rgba(var(--f52,142,142,142),1)',
        fontSize:'14px',
    },
    commentsSubContainer:{
        maxHeight:'50px',
        overflowY: 'auto',
        padding:'2px 0',
    },
    postComments:{
        display:'flex',
        padding:'2px 0',
    },
    comment:{
        fontSize:'14px',
        marginLeft:'7px'
    },
    postCreatedAt:{
        padding:'2px 16px',
    },
    createdAt:{
        color: 'rgba(var(--f52,142,142,142),1)',
        fontSize:'12px',
    },
    addCommentDiv:{
        position:'relative',
    },
    commentInput:{
        marginTop:'10px',
        padding:'15px 22px',
        width:'100%',
        borderRight:'none',
        borderLeft:'none',
        borderBottom:'none',
        borderTop:'1px solid rgba(0, 0, 0, 0.12)',
        outline:'0px',
        fontSize:'15px',
    },
    commentBtn:{
        position:'absolute',
        right:'5px',
        top:'15px',
    }
}))