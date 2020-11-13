import express from "express"
const router = express.Router()

import Post from "../models/Post.js"
import auth from "../middleware/auth.js"
import postValidation from "../validation/postValidation.js"

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .sort("-createdAt")
      .populate("author", ["fullname", "_id"])
      .populate("likes", ["_id", "user"])
      .populate("dislikes", ["_id", "user"])
      .populate("comments", ["_id", "user", "fullname", "text"])

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
    res.status(200).json(post)
  } catch (err) {
    res.status(400).json("Error : " + err.message)
  }
})

router.post("/", auth, async (req, res) => {
  // Validate Post
  const { error } = postValidation(req.body)
  if (error) return res.status(400).json(error.details[0].message)

  try {
    // Get variables and check post.
    const { title, body } = req.body
    const newPost = {
      title,
      body,
      author: req.user.id,
    }

    const newPostToAdd = await Post.create(newPost)
    const postToSend = await Post.findById(newPostToAdd._id).populate(
      "author",
      ["fullname", "_id"]
    )
    res.status(200).json(postToSend)
  } catch (err) {
    res.status(400).json("Error : " + err.message)
  }
})

router.patch("/:id", auth, async (req, res) => {
  // Validate Post
  const { error } = postValidation(req.body)
  if (error) return res.status(400).json(error.details[0].message)

  // Check if the request is post owner
  const postCheck = await Post.findOne({ _id: req.params.id })
  if (!postCheck) return res.status(404).json("No post found with that id!")
  if (req.user.id != postCheck.author)
    return res.status(401).json("You can't change others' posts!")

  // Update the post
  try {
    const { title, body } = req.body

    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.params.id },
      { title, body },
      { new: true }
    ).populate("author", ["fullname", "_id"])

    await updatedPost.save()

    res.status(200).json(updatedPost)
  } catch (error) {
    res.status(400).json("Server error, Please try again!")
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
