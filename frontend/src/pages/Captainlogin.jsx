import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { captaindatacontext } from '../context/CaptainContext'
import axios from 'axios'

const Captainlogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { captain, setcaptain } = useContext(captaindatacontext)

  const submithandler = async (e) => {
    e.preventDefault()

    const captaindata = {
      email: email,
      password: password
    }
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captaindata
    )

    if (response.status === 200) {
      const data = response.data
      setcaptain(data.captain)
      localStorage.setItem('captain-token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='relative flex justify-center items-center h-screen bg-gray-100'>
      <div className='relative bg-white p-10 rounded-3xl shadow-lg max-w-md w-full z-10'>
        <h2 className='text-center text-3xl font-semibold mb-8 text-gray-800'>
          Captain Login
        </h2>
        <form onSubmit={submithandler} className='space-y-6'>
          <div>
            <label htmlFor="email" className='text-lg font-medium text-gray-700'>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff874f]'
              placeholder='Enter your email'
              required
            />
          </div>
          <div>
            <label htmlFor="password" className='text-lg font-medium text-gray-700'>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff874f]'
              placeholder='Enter your password'
              required
            />
          </div>
          <button
            type="submit"
            className='w-full py-3 text-white bg-[#ff8244] rounded-md hover:bg-[#e9743a] transition duration-200'
          >
            Login
          </button>
        </form>
        <div className='mt-4 text-center'>
          <p className='text-sm text-gray-600'>
            New here?{' '}
            <Link to="/captain-signup" className='text-[#ff8244] font-medium'>
              Register as a captain
            </Link>
          </p>
        </div>
        <div className='mt-4 text-center'>
          <Link to="/user-login" className='text-sm text-[#ff8244]'>
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Captainlogin
