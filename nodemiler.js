var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thuvarakanp96@gmail.com',
    pass: 'thuvarakanmax0'
  }
});

var mailOptions = {
  from: 'thuvarakanp96@gmail.com',
  to: 'thuvarakan2015@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
