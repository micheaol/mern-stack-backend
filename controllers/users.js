import User from "../models/user.js"

import { check, validationResult } from 'express-validator';

//User validator:
export const validateUser = [
    check('name', 'Name can not be empty, it must be atleast 5 character!')
      .trim()
      .escape()
      .not()
      .isEmpty()
      .bail()
      .isLength({min: 5})
      .bail(),
    check('email', 'Invalid email address!').isEmail(),
    check('password', 'Your password must be atleast 6 or more')
      .isLength({ min: 6 }),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});
      next();
    },
  ];

export const getUsers =  async (req, res) => {
    try {
        const users = await User.find()
        
        res.status(200).json(users)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createUser = async (req, res) => {
   const user = req.body
   const newUser = new User(user)

   try {
       await newUser.save()

       res.status(201).json(newUser);
       
   } catch (error) {
       res.status(409).json({message: error.message})
   }
}