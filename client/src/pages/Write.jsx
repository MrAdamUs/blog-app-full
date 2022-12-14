import React, { useState } from "react"
import ReactQuill from "react-quill"
import axios from "axios"
import "react-quill/dist/quill.snow.css"
import { useLocation } from "react-router-dom"
import moment from "moment"

const Write = () => {
  const postState = useLocation().state
  const [value, setValue] = useState(postState?.desc || "")
  const [title, setTitle] = useState(postState?.title || "")
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState(postState?.cat || "")

  const upload = async () => {
    try {
      const formData = new FormData()
      formData.append("file", file)
      const res = await axios.post(`http://localhost:8800/api/upload`, formData)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const imgUrl = await upload()

    try {
      postState
        ? await axios.put(`http://localhost:8800/api/posts/${postState.id}`, {
            title,
            desc: value,
            cat,
            postImg: file ? imgUrl : "",
          })
        : await axios.post(`http://localhost:8800/api/posts/`, {
            title,
            desc: value,
            cat,
            postImg: file ? imgUrl : "",
            date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
          })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='add'>
      <div className='content'>
        <input
          type={"text"}
          placeholder='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className='editorContainer'>
          <ReactQuill
            className='editor'
            theme='snow'
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type='file'
            id='file'
            name=''
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className='file' htmlFor='file'>
            Upload Image
          </label>
          <div className='buttons'>
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          {/* {cat.map((cat) => (
            <div className='cat'>
              <input
                type='radio'
                name={cat}
                value={cat}
                checked={cat === cat.name}
                id='art'
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor='art'>Art</label>
            </div>
          ))} */}
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='art'
              id='art'
              checked={cat === "art"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='science'>Art</label>
          </div>

          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='science'
              id='science'
              checked={cat === "science"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='science'>Science</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='technology'
              id='technology'
              checked={cat === "technology"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='technology'>Technology</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='cinema'
              id='cinema'
              checked={cat === "cinema"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='cinema'>Cinema</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='design'
              id='design'
              checked={cat === "design"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='design'>Design</label>
          </div>
          <div className='cat'>
            <input
              type='radio'
              name='cat'
              value='food'
              id='food'
              checked={cat === "food"}
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor='food'>Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
