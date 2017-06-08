var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { name: 'Mala', maths_marks: '45', english_marks: '53', science_marks: '72'};
  var newvalues = { name: 'Mala', maths_marks: '51', english_marks: '53', science_marks: '72'};
  db.collection("studentmarks").update(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " record updated");
    db.close();
  });
});
