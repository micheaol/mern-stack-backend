import express from 'express';
import {auth} from "../middlewares/auth.js"

import {getRoute, loginUser} from '../controllers/auth.js'
import { validateLogin } from '../validators/user.js';


const router = express.Router();


router.get('/', auth, getRoute);
router.post('/', validateLogin, loginUser);


export  default router;