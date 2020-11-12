import express from "express"
const router = express.Router()

import Post from "../models/Post.js"
import auth from "../middleware/auth.js"

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .sort("-createdAt")
      .populate("author", ["fullname", "_id"])
    res.status(200).json(posts)
  } catch (err) {
    res.status(400).json("Error : " + err.message)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author", [
      "fullname",
      "_id",
    ])
    if (!post) return res.status(404).json("Post is not found!")
    res.status(200).json({
      post,
      likes: post.likes.length,
      dislikes: post.dislikes.length,
    })
  } catch (err) {
    res.status(400).json("Error : " + err.message)
  }
})

router.post("/", auth, async (req, res) => {
  try {
    // Get variables and check post.
    const { title, body } = req.body
    const newPost = {
      title,
      body,
      author: req.user.id,
    }

    const newPostToAdd = await Post.create(newPost)
    res.status(200).json(newPostToAdd)
  } catch (err) {
    res.status(400).json("Error : " + err.message)
  }
})

router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) return res.status(404).json("No post found with that id!")

    console.log(post.author)
    console.log(req.user.id)
    if (post.author != req.user.id)
      return res.status(401).json("You can't delete others' posts!")

    await post.remove()
    res.status(200).json("Post successfully deleted!")
  } catch (err) {
    res.status(400).json("Error : " + err.message)
  }
})

export default router
