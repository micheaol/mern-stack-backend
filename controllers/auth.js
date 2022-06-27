import User from "../models/user.js";

export const getRoute = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        res.json(user)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error')
    }
}