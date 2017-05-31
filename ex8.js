var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Thuvarakan Perinpanayagam',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'thuvarakan@gmail.com',
  to: 'info@uki.life',
  subject: 'Testing my nodemailer module',
  text: '<h1>head</h1><p>That is easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
