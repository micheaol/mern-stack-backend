import { check, validationResult } from 'express-validator';


  //Profile validator:
  export const validateProfile = [
    check('status', 'Status is required!').not().isEmpty(),
    check('skills', 'Skills is required').not().isEmpty(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({errors: errors.array()});
      next();
    },
  ];