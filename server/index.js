import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRouter from './routes/posts.js';
import userRouter from './routes/auth.js';

const app = express();
app.use(cors());
app.use(express.json({limit:'30mb',extended:true}))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use('/auth',userRouter);
app.use('/',postRouter);

const CONNECTION_DB = 'mongodb+srv://hamdi:mongo26955951@cluster1.uwe9y.mongodb.net/instaArab?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_DB,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => app.listen(PORT,() => console.log(`server is running on port ${PORT}`)))
.catch((error) => console.log(error));

mongoose.set('useFindAndModify',false);

