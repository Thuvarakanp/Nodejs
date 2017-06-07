var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/uki";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var students = [
    { name: 'thuva', address: 'jaffna'},
    { name: 'jana', address: 'velanai'},
    { name: 'mino', address: 'jaffna'},
    { name: 'tharshan', address: 'thondamanaaru'},
    { name: 'janu', address: 'sunnakam'},
    { name: 'mayoori', address: 'velanai'},
    { name: 'dilani', address: 'karainagar'},
    { name: 'daneelsan', address: 'velanai'},
    { name: 'jackshanan', address: 'tringo'},
    { name: 'shahama', address: 'puttalam'},
    { name: 'ramana', address: 'thondamanaaru'},
    { name: 'thadcha', address: 'thondamanaaru'},
    { name: 'sanga', address: 'chavakachseri'},
    { name: 'keerthana', address: 'vavuniya'},
    { name: 'abi', address: 'suliburam'}
  ];
  db.collection("students").insert(students, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
