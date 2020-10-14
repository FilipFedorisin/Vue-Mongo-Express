import MongoClient from "mongodb"
import assert from "assert"

const url = "mongodb://localhost:27017"
const dbName = "eshop"

let db = null

async function getClient() {
  return new Promise((resolve, reject) => {
    if (!db) {
      MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        assert.strictEqual(null, err)
        console.log("MongoDB - Database connection successfull")
        db = client.db(dbName)
        resolve(db)
      })
    } else {
      resolve(db)
    }
  })
}

function close() {
  client.close()
}

export default {
  getClient,
  close,
}
