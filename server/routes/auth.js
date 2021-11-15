import express from 'express';
import {signup,signin} from '../controllers/users.js';

const userRouter = express.Router();

userRouter.post('/register',signup);
userRouter.post('/login',signin);


export default userRouter;