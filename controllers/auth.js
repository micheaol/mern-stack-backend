import User from "../models/user.js";
import { check, validationResult } from 'express-validator';
import config from 'config';
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

export const getRoute = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        res.json(user)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error')
    }
}

export const loginUser = async (req, res) => {
    const { email, password, } = req.body

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: [{ message: "Invalid Credentials"}]})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({ error: [{ message: "Invalid Credentials"}]})
        }
        
       const payload = {
           user: {
               id: user.id
           }
       }

       jwt.sign(
           payload,
           config.get('jwtSecretToken'),
           {expiresIn: 3600000},
           (err, token) => {
            if(err) throw err;

            res.json({ token})
           }

        );

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server error")
    }
}