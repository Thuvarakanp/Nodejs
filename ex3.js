var fs = require('fs');

fs.appendFile('ukinode.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
