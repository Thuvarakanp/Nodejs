var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { Song_Name: 'Evano Oruvan', Film : 'Alai Payuthey', Music_Director : 'A.R.Rahman', Singer : 'Swarnalatha' };
  db.collection("songdetails").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });
});
