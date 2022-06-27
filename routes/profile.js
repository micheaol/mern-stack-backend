import express from 'express';

import { auth } from '../middlewares/auth.js';
import { getProfile, createProfile } from '../controllers/profile.js';
import { validateProfile } from '../validators/profile.js';



const router = express.Router();

//@route = GET api/v1/profile/me
//@desc = POST create or update user profile
//access = Private

router.post('/', validateProfile ,auth, createProfile);
router.get('/me', auth, getProfile);


export default router;