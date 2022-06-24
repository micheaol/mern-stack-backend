import express from 'express';
import { createPost, getPosts } from '../controllers/posts.js';

const router = express.Router();

//route = /posts
router.get('/', getPosts);
router.post('/', createPost)


export default router;