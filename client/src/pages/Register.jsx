import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Register = () => {
  const [inputs, setInput] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs
      )
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(inputs)

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input
          required
          type={"text"}
          placeholder='username'
          name='username'
          onChange={handleChange}
        />
        <input
          required
          type={"email"}
          placeholder='email'
          name='email'
          onChange={handleChange}
        />
        <input
          required
          type={"password"}
          placeholder='password'
          name='password'
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        <p>This is an error!</p>
        <span>
          Don you have an account ? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register

// "proxy":"http://localhost:8800/api/"
// "http://localhost:8800/api/auth/register",
