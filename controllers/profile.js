import Profile from "../models/Profile.js";
import User from '../models/user.js'

//@route = GET api/v1/profile/me
//@desc = Get current user profile
//access = Private
export const getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id}).populate('user', ['name', 'avatar'])

        if(!profile){
            return res.status(400).json({ msg: 'There is no profile for this user'})
        }

        res.json(profile)
        
    } catch (error) {
        console.log(error.message);

        res.status(500).send("Server error")
    }

}

//@route = GET api/v1/profile/
//@desc = Get current user profile
//access = Private
export const createProfile = async (req, res) => {

}