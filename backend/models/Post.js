import mongoose from "mongoose"

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "You should provide a title for your post!"],
    },
    body: {
      type: String,
      required: [true, "You should provide a title for your post's body!"],
      min: [4, "Your body is too short!"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
      },
    ],
    dislikes: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
      },
    ],
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        fullname: {},
        text: {
          type: String,
          required: [true, "Please provide a text for your wcomment!"],
        },
      },
    ],
  },
  { timestamps: true }
)

export default mongoose.model("Post", PostSchema)
