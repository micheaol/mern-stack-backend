import User from "../models/user.js";
import gravatar from "gravatar";
import config from 'config';
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";


export const getUsers = async (req, res) => {
  
}


export const createUser =  async (req, res) => {
    const { name, email, password, } = req.body

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: [{ message: "User already exist"}]})
        }

        const avatar = gravatar.url(email, {
            s: "200",
            r: "pg",
            d: "mm"
        })

        user = new User({
            name,
            email,
            password,
            avatar
        })

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save()
        
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

