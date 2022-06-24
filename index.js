import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './config/db.js';


import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
connectDB();


app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());


app.use('/posts', postRoutes)
app.use('/users', userRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT)

