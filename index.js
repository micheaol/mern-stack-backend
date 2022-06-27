import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './config/db.js';


import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js'
import profileRoutes from './routes/profile.js';
const app = express();
connectDB();


app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());



app.use('/api/v1/posts', postRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/profile', profileRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT)

