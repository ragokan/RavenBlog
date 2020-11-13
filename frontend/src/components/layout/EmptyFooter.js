import React, { useContext, useEffect } from "react"
import { PostContext } from "../../context/PostContext"

const EmptyFooter = () => {
  const { getPosts } = useContext(PostContext)
  useEffect(
    () => {
      getPosts()
    },
    /*eslint-disable*/ []
  )
  return <></>
}

export default EmptyFooter
