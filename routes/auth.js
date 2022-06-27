import express from 'express';
import {auth} from "../middlewares/auth.js"

import {getRoute} from '../controllers/auth.js'


const router = express.Router();


router.get('/', auth, getRoute)


export  default router;