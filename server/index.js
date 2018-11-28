var twilio = require('twilio');

// load variables from .env file
require('dotenv').config();

// following : https://www.twilio.com/blog/2016/04/send-text-in-javascript-node-in-30-seconds.html
//
// run with : node index.js
// for trial accounts, cannot send messages to un verified numbers
// only numbers verified on the account itself. makes sense, otherwise spame
//
// -- Ted DePietro


// Find your account sid and auth token in your Twilio account Console.
var client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Send the text message.
client.messages.create({
  to: '+18143411796',
  from: process.env.TWILIO_NUMBER,
  body: 'Hello World from Twilio!'
}).then(message => console.log(message.sid)).done();

