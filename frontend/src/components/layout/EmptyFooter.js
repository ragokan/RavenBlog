import React, { useContext, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import { PostContext } from "../../context/PostContext"

const EmptyFooter = () => {
  const { getPosts } = useContext(PostContext)
  const { token, setToken } = useContext(AuthContext)

  useEffect(() => {
    if (token) return
    const storageToken = localStorage.getItem("authtoken")
    setToken(storageToken)
  }, [token, setToken])

  useEffect(
    () => {
      getPosts()
    },
    /*eslint-disable*/ []
  )
  return <></>
}

export default EmptyFooter
