import React, { useState, useEffect, useContext } from "react"
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import Menu from "./Menu"
import { Link, useLocation, useNavigate } from "react-router-dom"
import moment from "moment"
import { AuthContext } from "../context/authContext"
import axios from "axios"

const Single = () => {
  const [post, setPost] = useState({})
  const location = useLocation()

  const postId = location.pathname.split("/")[2]
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${postId}`)
        setPost(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [postId])

  const handleDelete = async () => {
    console.log("delete")
    try {
      await axios.delete(`http://localhost:8800/api/posts/${postId}`)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='single'>
      <div className='content'>
        <img src={post?.postImg} alt='' />
        <div className='user'>
          {post.userimg && <img src={post.userimg} alt='' />}
          <div className='info'>
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (
            <div className='edit'>
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt='edit' />
              </Link>

              <img src={Delete} alt='delete' onClick={handleDelete} />
            </div>
          )}
        </div>
        <h1>{post?.title}</h1>
        {post?.desc}
      </div>
      <div className='menu'>
        <Menu cat={post.cat} />
      </div>
    </div>
  )
}

export default Single
