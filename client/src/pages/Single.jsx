import React, { useState, useEffect, useContext } from "react"
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import Menu from "./Menu"
import { Link, useLocation } from "react-router-dom"
import moment from "moment"
import { AuthContext } from "../context/authContext"
import axios from "axios"

const Single = () => {
  const [post, setPost] = useState({})
  const location = useLocation()

  const postId = location.pathname.split("/")[2]
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${postId}`)
        console.log(res.data)
        setPost(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [postId])
  console.log(post)
  return (
    <div className='single'>
      <div className='content'>
        <img src={post?.postImg} alt='' />
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <div className='info'>
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (
            <div className='edit'>
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt='edit' />
              </Link>

              <img src={Delete} alt='delete' />
            </div>
          )}
        </div>
        <h1>{post?.title}</h1>
        {post?.desc}
      </div>
      <div className='menu'>
        <Menu />
      </div>
    </div>
  )
}

export default Single
