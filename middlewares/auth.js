import jwt from 'jsonwebtoken';
import config from 'config';


export const auth = (req, res, next) => {
    const token = req.header('x-auth-token');

    if(!token) {
        return res.status(401).json({ msg: "No token, authorization denied"});
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecretToken'));

        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: "Invalid token"})
    }
}