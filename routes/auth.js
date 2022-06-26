import express from 'express';

import {getRoute} from '../controllers/auth.js'


const router = express.Router();


router.get('/', getRoute)


export  default router;