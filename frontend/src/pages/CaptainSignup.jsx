import React, { useState } from 'react'
import orange from '../assets/oo.jpeg'
import { Link } from 'react-router-dom'


const CaptainSignup = () => {
  const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [firstname,setfirstname]=useState('');
    const [lastname,setlastname]=useState('');
    const [userdata,setuserdata]=useState({});
    const submithandler = (e) => {
      e.preventDefault();
      
      setuserdata({
        fullname:{
          firstname:firstname,
          lastname:lastname
        },
        email:email,
        password:password
      })
      
      setfirstname('');
      setlastname('');
      setemail('');
      setpassword('');
    }
  return (
    <div >
      <div className='relative flex justify-center items-center h-screen'>
        <img src={orange} className='-z-40 absolute h-[100vh] w-full' />
        <div className=' h-[600px] w-[400px] absolute bg-slate-50 p-10 rounded-3xl  space-y-20'>
          <form
            onSubmit={(e) => { submithandler(e) }}
            className=' space-y-4'>
            <div className=''>
              <h3 className='text-xl font-base w-[100%]'>What's your name</h3>
              <div className=' flex gap-2'>
                <input
                value={firstname}
                onChange={(e)=>{setfirstname(e.target.value)}}
                  className='bg-[#eeeeee]  rounded-md w-[100%] h-11 placeholder:p-1 text-sm' required type="text" placeholder="Enter your first name" />
                <input
                value={lastname}
                onChange={(e)=>{setlastname(e.target.value)}}
                  className='bg-[#eeeeee] rounded-md w-[100%] h-11 placeholder:p-1 text-sm' type="text" placeholder="Enter your last name" />
              </div>
            </div>

            <div className=''>
              <h3 className='text-xl font-base w-[100%]'>What's your email</h3>
              <input
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
                className='bg-[#eeeeee] rounded-md w-[100%] h-11 placeholder:p-3 text-sm' required type="email" placeholder="Enter your Email" />
            </div>
            <div>
                <h3 className='text-xl font-base w-[100%] '>Enter your password</h3>
                <input 
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
                className='bg-[#eeeeee] rounded-md w-[100%] h-11 placeholder:p-3 text-sm' required type="password" placeholder="Enter your password"/>
                </div>
            <button className=' rounded-md bg-black text-white w-[100%] h-[50px]'>Sign up</button>
            <div className='text-xl'>Already have a Account? <Link className='text-[#d5622d]' to={"/captain-login"}>Login here</Link></div>
          </form>
          <p className=' text-xs absolute w-[80%] bottom-6'>By proceeding, you constent to get a call, WhatsApp or SMS message, includig by automated means, from CarBuddy and its affiliates to the number provided.</p>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup