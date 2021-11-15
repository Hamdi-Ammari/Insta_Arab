import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    message:String,
    selectedFile:String,
    creator:String,
    name:String,
    likes:{
        type:[String],
        default:[]
    },
    comments:{
        type:[Object],
        default:[]
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

var PostModel = mongoose.model('PostModel',postSchema);
export default PostModel;