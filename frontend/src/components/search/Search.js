import React, { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { PostContext } from "../../context/PostContext"
import FilteredPosts from "./FilteredPosts"
import FilteredUsers from "./FilteredUsers"

const Search = () => {
  const { posts } = useContext(PostContext)
  const { allUsers } = useContext(AuthContext)
  const [current, setCurrent] = useState("posts")
  const [searchValue, setSearchValue] = useState("")

  let filteredPosts = []
  let filteredUsers = []

  if (current === "posts") {
    filteredPosts = searchPosts(searchValue, posts)
  } else {
    filteredUsers = searchUsers(searchValue, allUsers)
  }

  function searchPosts(value, data) {
    let filteredData = []

    data.map((item, index) => {
      value = value.toLowerCase()
      let title = data[index].title.toLowerCase()

      if (title.includes(value)) filteredData.push(data[index])
      return null
    })

    return filteredData
  }

  function searchUsers(value, data) {
    let filteredData = []

    data.map((item, index) => {
      value = value.toLowerCase().trim()
      let title = data[index].fullname.toLowerCase().trim()

      if (title.includes(value)) filteredData.push(data[index])
      return null
    })

    return filteredData
  }

  const currentPosts = filteredPosts.map((post) => (
    <FilteredPosts post={post} key={post._id} />
  ))

  const currentUsers = filteredUsers.map((user) => (
    <FilteredUsers user={user} key={user._id} />
  ))

  return (
    <div>
      <div className="row checkHolder">
        <form
          action="#"
          className="checks"
          onChange={(e) => setCurrent(e.target.value)}
        >
          <p className="col s6">
            <label>
              <input name="group1" type="radio" value="posts" />
              <span>Search In Posts</span>
            </label>
          </p>
          <p className="col s6">
            <label>
              <input name="group1" type="radio" value="users" />
              <span>Search In Users</span>
            </label>
          </p>
        </form>

        <div className="input-field col s12">
          <i className="material-icons prefix">search</i>
          <input
            id="text"
            type="text"
            className="validate"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <label htmlFor="text">Write your search terms here!</label>
        </div>
      </div>
      <h5 className="center">
        {current === "posts"
          ? `Found ${filteredPosts.length} posts!`
          : `Found ${filteredUsers.length} users!`}
      </h5>
      <br />
      {current === "posts" ? currentPosts : currentUsers}
    </div>
  )
}

export default Search
