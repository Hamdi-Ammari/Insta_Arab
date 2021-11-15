import express from 'express';

import {createPost,getPosts,updatePost,likePost,addComment,deletePost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const postRouter = express.Router();

postRouter.get('/',getPosts);
postRouter.post('/',auth,createPost);
postRouter.patch('/:id',auth,updatePost);
postRouter.patch('/likePost/:id',auth,likePost);
postRouter.post('/addComment/:id',auth,addComment);
postRouter.delete('/:id',auth,deletePost);


export default postRouter;
