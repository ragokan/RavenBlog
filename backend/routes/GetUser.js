import express from "express"
import User from "../models/User.js"
import auth from "../middleware/auth.js"
const router = express.Router()

// router.get("all", async (req, res) => {
//   try {
//     let users = await User.find().select(["-password", "-logintoken"])
//     // let posts = await Post.find()
//     //   .sort("-createdAt")
//     //   .populate("likes", ["_id", "user"])
//     //   .populate("dislikes", ["_id", "user"])
//     //   .populate("comments", ["_id", "user", "fullname", "text"])

//     // let postUsers = users.map((user) => {
//     //   return {
//     //     ...user._doc,
//     //     posts: [
//     //       posts.filter((post) => String(post.author) === String(user._id)),
//     //     ],
//     //   }
//     // })

//     res.status(200).json(users)
//   } catch (error) {
//     res.status(404).json(error)
//   }
// })

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select([
    "-password",
    "-logintoken",
  ])
  res.status(200).json(user)
})

export default router
