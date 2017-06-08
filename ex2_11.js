var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { name:"Raam" };
  var newvalues = {  name:"Raam",maths_marks:41,english_marks:65 };
  db.collection("studentmarks").update(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " record updated");
    db.close();
  });
})
