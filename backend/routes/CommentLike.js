import express from "express"
const router = express.Router()

import Post from "../models/Post.js"
import auth from "../middleware/auth.js"
import User from "../models/User.js"
;("")
router.post("/:id/like", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) return res.status(404).json("No post found with that id!")
    for (let i = 0; i < post.likes.length; i++) {
      const element = post.likes[i]
      if (element.user == req.user.id) {
        return res.status(400).json("You already liked this post!")
      }
    }
    for (let i = 0; i < post.dislikes.length; i++) {
      const element = post.dislikes[i]
      if (element.user == req.user.id) {
        post.dislikes.splice(req.user.id, 1)
        break
      }
    }
    await post.likes.unshift({ user: req.user.id })
    await post.save()
    res.status(200).json(post)
  } catch (err) {
    res.status(400).json("Error : " + err)
  }
})

router.post("/:id/dislike", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) return res.status(404).json("No post found with that id!")
    for (let i = 0; i < post.dislikes.length; i++) {
      const element = post.dislikes[i]
      if (element.user == req.user.id) {
        return res.status(400).json("You already disliked this post!")
      }
    }
    for (let i = 0; i < post.likes.length; i++) {
      const element = post.likes[i]
      if (element.user == req.user.id) {
        post.likes.splice(req.user.id, 1)
        break
      }
    }
    await post.dislikes.unshift({ user: req.user.id })
    await post.save()
    res.status(200).json(post)
  } catch (err) {
    res.status(400).json("Error : " + err)
  }
})

router.post("/:id/comment", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) return res.status(404).json("No post found with that id!")
    const user = await User.findById(req.user.id)
    await post.comments.unshift({
      user: req.user.id,
      fullname: user.fullname,
      text: req.body.text,
    })
    await post.save()
    res.status(200).json(post)
  } catch (err) {
    res.status(400).json("Error : " + err)
  }
})

export default router
