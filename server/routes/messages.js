const express = require('express');

const { Router } = express;

const Message = require('../models/message');
const messageRouter = Router();

require('dotenv').config();

const twilio = require('twilio');

const client = new twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

messageRouter
  .route('/')
  .get((req, res, next) => {
    Message.find({}, (err, messages) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        Message.countDocuments({}, (err, count) => {
          res.status(200).send({ count, messages });
        });
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
        // Send the text message.
        // client.messages
        //   .create({
        //   to: 'xxxxxxxxx',
        //   from: process.env.TWILIO_NUMBER,
        //   body: 'Hello World from Twilio!'
        // })
        // .then(message => console.log(message.sid))
        // .done();
      }
    });
  });

messageRouter
  .route('/:id')
  .put((req, res, next) => {
    Message.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(editedMessage => res.status(200).send(editedMessage))
      .catch(err => next(err))
  })
  .delete((req, res, next) => {
    Message.findByIdAndDelete(req.params.id)
      .then(() => res.status(200).send())
      .catch(err => next(err))
  });

messageRouter.route('/unread').get((req, res, next) => {
  Message.find({ read: false }, (err, messages) => {
    if (err) {
      res.status(400);
      next(err);
    } else {
      Message.countDocuments({ read: false }, (err, count) => {
        res.status(200).send({ count, messages });
      });
    }
  });
});

messageRouter.route('/talent').get((req, res, next) => {
  Message.find({ userType: 'talent' }, (err, messages) => {
    if (err) {
      res.status(400);
      next(err);
    } else {
      Message.countDocuments({ userType: 'talent' }, (err, count) => {
        res.status(200).send({ count, messages });
      });
    }
  });
});

messageRouter.route('/sponsors').get((req, res, next) => {
  Message.find({ userType: 'sponsor' }, (err, messages) => {
    if (err) {
      res.status(400);
      next(err);
    } else {
      Message.countDocuments({ userType: 'sponsor' }, (err, count) => {
        res.status(200).send({ count, messages });
      });
    }
  });
});

module.exports = messageRouter;
