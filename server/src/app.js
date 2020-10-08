const express = require("express")
const fs = require("fs")
const cors = require("cors")
const { getClient } = require("./db")
const { stringify } = require("querystring")

const app = express()
const PORT = process.env.PORT || 5000
console.log(`Node - Server running on http://localhost:${PORT}`)

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send({
    serverMessage: "The server is running",
  })
})

app.get("/favicon.ico", (req, res) => {
  var img = fs.readFileSync(__dirname + "/assets/favicon.ico")
  res.writeHead(200, { "Content-Type": "image/x-icon" })
  res.end(img, "binary")
})

app.post("/api/users", async (req, res) => {
  // TODO: refactor into handler / interactor / persistence

  const client = await getClient()
  const collection = client.collection("users")
  const result = await collection.insertOne(req.body)
  res.send(result.ops[0])
})

app.get("/api/users", async (req, res) => {
  //! SECURITY WARNING REMOVE AFTER INTEGRATION
  const client = await getClient()
  const collection = client.collection("users")
  const users = await collection.find({}).toArray()
  res.send(users)
})

app.listen(PORT)
