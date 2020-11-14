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
import Post from "./routes/Post.js"
import CommentLike from "./routes/CommentLike.js"
import Profile from "./routes/Profile.js"
import AllUsers from "./routes/AllUsers.js"
app.use("/api/register", Register)
app.use("/api", Loginout)
app.use("/api/getuser", GetUser)
app.use("/api/posts", Post)
app.use("/api/posts", CommentLike)
app.use("/api/profile", Profile)
app.use("/api/users", AllUsers)

// In deploy
// app.use((req, res, next) => {
//   if (req.header("x-forwarded-proto") !== "https") {
//     res.redirect(`https://${req.header("host")}${req.url}`)
//   } else {
//     next()
//   }
// })

// Connect
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log("Server is runninng right now!"))
