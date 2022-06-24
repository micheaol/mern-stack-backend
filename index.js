import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());


app.use('/posts', postRoutes)
app.use('/users', userRoutes)


const CONNECTION_URL = "mongodb+srv://codestation:codestation123456@cluster0.nmoqb1c.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, UseUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Successfully connected to DB, App running on PORT: ${PORT}`)))
    .catch((error) => console.log(error.message) )

