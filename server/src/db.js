const MongoClient = require("mongodb").MongoClient
const assert = require("assert")
const url = "mongodb://localhost:27017"
const dbName = "eshop"

let db = null

exports.getClient = async () => {
  return new Promise((resolve, reject) => {
    if (!db) {
      MongoClient.connect(url, function (err, client) {
        assert.strictEqual(null, err)
        console.log("MongoDB - Connected succesfully to server.")
        db = client.db(dbName)
        resolve(db)
      })
    } else {
      resolve(db)
    }
  })
}

exports.close = () => {
  client.close()
}
