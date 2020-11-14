import express from "express"
const router = express.Router()
import auth from "../middleware/auth.js"
import User from "../models/User.js"

router.patch("/picture", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select([
      "-password",
      "-logintoken",
    ])

    const { picture } = req.body
    user.picture = picture
    await user.save()

    res.status(200).json(user.picture)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.patch("/about", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select([
      "-password",
      "-logintoken",
    ])

    const { about } = req.body
    user.about = about
    await user.save()

    res.status(200).json(user)
  } catch (error) {
    res.status(400).json(error)
  }
})

export default router
