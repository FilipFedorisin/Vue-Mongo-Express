import express from "express"
import fs from "fs"
import cors from "cors"
import db from "./database.js"
import { logTraffic } from "./middleware/reqLog.js"

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
  var img = fs.readFileSync("/assets/images/favicon.ico")
  res.writeHead(200, { "Content-Type": "image/x-icon" })
  res.end(img, "binary")
})

app.post("/api/users", logTraffic, async (req, res) => {
  // TODO: refactor into handler / interactor / persistence

  const client = await db.getClient()
  const collection = client.collection("users")
  const result = await collection.insertOne(req.body)
  res.send(result.ops[0])
})

app.get("/api/users", async (req, res) => {
  //! SECURITY WARNING REMOVE AFTER INTEGRATION
  const client = await db.getClient()
  const collection = client.collection("users")
  const users = await collection.find({}).toArray()
  res.send(users)
})

app.listen(PORT)
