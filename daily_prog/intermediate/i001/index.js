var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var test = require('assert');
// Connection URL 
var url = 'mongodb://localhost:27017/calendar';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server");

  // Use the admin database for the operation
	var adminDb = db.admin();
      // List all the available databases
	adminDb.listDatabases(function(err, dbs) {
		test.equal(null, err);
		test.ok(dbs.databases.length > 0);

	db.close();
	})
});
