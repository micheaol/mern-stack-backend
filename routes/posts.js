import express from 'express';
import { createPost, getPosts, updatePost } from '../controllers/posts.js';


const router = express.Router();

//@route = GET api/posts
//@desc = Post router
//@access = public
router.get('/', getPosts);
router.post('/', createPost)
router.patch('/:id', updatePost)


export default router;