import React, { useContext, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import FirestoreContext from "../../context/FirestoreContext"
import { PostContext } from "../../context/PostContext"

const EmptyFooter = () => {
  const { getPosts } = useContext(PostContext)
  const { token, setToken, getAllUsers } = useContext(AuthContext)
  const { docs } = FirestoreContext("news")

  useEffect(() => {
    if (token) return
    const storageToken = localStorage.getItem("authtoken")
    setToken(storageToken)
  }, [token, setToken])

  useEffect(
    () => {
      getPosts()
      getAllUsers()
    },
    /*eslint-disable */ [docs]
  )
  return <></>
}

export default EmptyFooter
