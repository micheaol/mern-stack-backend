import express from 'express';
import { getUsers, createUser, validateUser } from '../controllers/users.js';


const router = express.Router();

router.get('/', [], getUsers);
router.post('/', validateUser, createUser);


export default router;
