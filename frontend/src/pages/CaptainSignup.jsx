import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { captaindatacontext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainSignup = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  
  const [color, setcolor] = useState('')
  const [plate, setplate] = useState('')
  const [capacity, setcapacity] = useState('')
  const [vehicleType, setvehicleType] = useState('')

  const { captain, setcaptain } = useContext(captaindatacontext)
  const navigate = useNavigate()

  const submithandler = async (e) => {
    e.preventDefault()

    const captaindata = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password,
      vehicle: {
        color: color,
        plate: plate,
        capacity: capacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captaindata
    )

    if (response.status === 200) {
      const data = response.data
      setcaptain(data.captain)
      localStorage.setItem('captain-token', data.token)
      navigate('/captain-home')
    }

    setfirstname('')
    setlastname('')
    setemail('')
    setpassword('')
    setcolor('')
    setcapacity('')
    setplate('')
    setvehicleType('')
  }

  return (
    <div className='relative flex justify-center items-center min-h-screen min-w-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-center text-3xl font-semibold mb-8 text-gray-800'>
          Captain Signup
        </h2>
        <form onSubmit={submithandler} className='space-y-6'>
          <div>
            <h3 className='text-lg font-medium text-gray-700'>Full Name</h3>
            <div className='flex gap-4 flex-wrap'>
              <input
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
                className='w-full sm:w-[45%] p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff874f] focus:outline-none'
                required
                type="text"
                placeholder="First Name"
              />
              <input
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
                className='w-full sm:w-[45%] p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff874f] focus:outline-none'
                required
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <h3 className='text-lg font-medium text-gray-700'>Email Address</h3>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff874f] focus:outline-none'
              required
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <h3 className='text-lg font-medium text-gray-700'>Password</h3>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff874f] focus:outline-none'
              required
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div>
            <h3 className='text-lg font-medium text-gray-700'>Vehicle Information</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <input
                value={color}
                onChange={(e) => setcolor(e.target.value)}
                className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff874f] focus:outline-none'
                required
                type="text"
                placeholder="Vehicle Color"
              />
              <input
                value={plate}
                onChange={(e) => setplate(e.target.value)}
                className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff874f] focus:outline-none'
                required
                type="text"
                placeholder="Vehicle Plate"
              />
              <input
                value={capacity}
                onChange={(e) => setcapacity(e.target.value)}
                className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff874f] focus:outline-none'
                required
                type="number"
                placeholder="Vehicle Capacity"
              />
              <select
                value={vehicleType}
                onChange={(e) => setvehicleType(e.target.value)}
                className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff874f] focus:outline-none'
                required
              >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className='w-full py-3 text-white bg-[#ff8244] rounded-md hover:bg-[#e9743a] transition-all'
          >
            Create Captain Account
          </button>
        </form>
        
        <div className='mt-4 text-center gap-4'>
        <p className='text-xs text-center text-gray-500'>
          By proceeding, you consent to receive calls, WhatsApp, or SMS messages, including automated ones, from CarBuddy and its affiliates.
        </p>
          <p className='text-lg text-gray-700'>
            Already have an account?{" "}
            <Link to="/captain-login" className='text-[#ff8244] font-medium'>
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup
