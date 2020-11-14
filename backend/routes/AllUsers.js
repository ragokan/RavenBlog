import express from "express"
const router = express.Router()
import User from "../models/User.js"

router.get("/", async (req, res) => {
  try {
    let users = await User.find().select(["-password", "-logintoken"])
    res.status(200).json(users)
  } catch (error) {
    res.status(404).json(error)
  }
})

export default router
