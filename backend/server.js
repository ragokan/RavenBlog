import express from "express"
const app = express()

app.use(express.json())

import cors from "cors"
app.use(cors())

// ENV
import dotenv from "dotenv"
dotenv.config()

// MongoDB
import mongoose from "mongoose"
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log("Connected to the database!")
)

// Routes
import Register from "./routes/Register.js"
import Loginout from "./routes/Loginout.js"
import GetUser from "./routes/GetUser.js"
app.use("/api/register", Register)
app.use("/api", Loginout)
app.use("/api/getuser", GetUser)

// Connect
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log("Server is runninng right now!"))
