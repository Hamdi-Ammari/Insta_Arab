import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRouter from './routes/posts.js';
import userRouter from './routes/auth.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({limit:'30mb',extended:true}))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use('/auth',userRouter);
app.use('/',postRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_DB,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => app.listen(PORT,() => console.log(`server is running on port ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);

