const express = require('express');

const { Router } = express;

const Message = require('../models/message');
const messageRouter = Router();

messageRouter
  .route('/')
  .get((req, res, next) => {
    Message.find({}, (err, messages) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(200).send(messages);
      }
    });
  })
  .post((req, res, next) => {
    const newMessage = new Message(req.body);
    newMessage.save((err, savedMessage) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(201).send(savedMessage);
      }
    });
  });

messageRouter.route('/unread').get((req, res, next) => {
  Message.find({ read: false }, (err, messages) => {
    if (err) {
      res.status(400);
      next(err);
    } else {
      res.status(200).send(messages);
    }
  });
});

messageRouter.route('/talent').get((req, res, next) => {
  Message.find({ userType: 'talent' }, (err, messages) => {
    if (err) {
      res.status(400);
      next(err);
    } else {
      res.status(200).send(messages);
    }
  });
});

messageRouter.route('/sponsors').get((req, res, next) => {
  Message.find({ userType: 'sponsor' }, (err, messages) => {
    if (err) {
      res.status(400);
      next(err);
    } else {
      res.status(200).send(messages);
    }
  });
});

module.exports = messageRouter;
