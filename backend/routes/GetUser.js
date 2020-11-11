import express from "express"
import User from "../models/User.js"
import auth from "../middleware/auth.js"
const router = express.Router()

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select([
    "-password",
    "-logintoken",
  ])
  res.status(200).json(user)
})

export default router
