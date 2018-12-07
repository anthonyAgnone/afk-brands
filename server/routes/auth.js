const express = require('express');
const User = require('../models/admin');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

// authRouter.post('/register', (req, res, next) => {
//   User.findOne({ userName: req.body.userName }, (err, existingUser) => {
//     if (err) {
//       res.status(500);
//       return next(err);
//     } else if (existingUser !== null) {
//       res.status(400);
//       return next(new Error('Username already exists'));
//     }
//     const newUser = new User(req.body);
//     newUser.save((err, user) => {
//       if (err) {
//         res.status(500);
//         return next(err);
//       }
//       const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
//       return res.status(201).send({ user: user.withoutPassword(), token });
//     });
//   });
// });

authRouter.post('/login', (req, res, next) => {
  const formattedUserName = req.body.userName.toLowerCase();
  console.log(formattedUserName);
  User.findOne({ userName: req.body.userName.toLowerCase() }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (!user) {
      return res.status(403).send({ reason: 'Username not found' });
    }
    user.checkPassword(req.body.password, (err, isMatch) => {
      if (err) return res.status(500).send(err);
      if (!isMatch)
        return res.status(401).send({ reason: 'Invalid passsword' });
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      return res.send({ user: user.withoutPassword(), token });
    });
  });
});

authRouter.get(
  '/verify',
  expressJwt({ secret: process.env.SECRET }),
  (req, res, next) => {
    User.findById(req.user._id)
      .then(user => res.status(200).send(user))
      .catch(err => next(err));
  }
);

module.exports = authRouter;
