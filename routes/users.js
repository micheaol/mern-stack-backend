import express from 'express';
import { getUsers, createUser } from '../controllers/users.js';
import { validateUser } from '../validators/user.js';


const router = express.Router();

router.get('/', [], getUsers);
router.post('/', validateUser, createUser);


export default router;
