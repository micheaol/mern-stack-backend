import Users from "../models/user.js";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";


export const getUsers = async (req, res) => {
  
}


export const createUser =  async (req, res) => {
    const { name, email, password, } = req.body

    try {
        let user = await Users.findOne({ email });

        if (user) {
            return res.status(400).json({ error: [{ message: "User already exist"}]})
        }

        const avatar = gravatar.url(email, {
            s: "200",
            r: "pg",
            d: "mm"
        })

        user = new Users({
            name,
            email,
            password,
            avatar
        })

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save()
        
        res.send("User created succeful")

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server error")
    }
}

