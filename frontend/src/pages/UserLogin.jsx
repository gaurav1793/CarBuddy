import React, { useState } from 'react'
import green from '../assets/og.jpeg'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userdata  ,setuserdata] = useState({});

  const submithandler=(e)=>{
    e.preventDefault();
    
    setuserdata({
      email:email,
      password:password
    })
    setEmail('');
    setPassword('');
  }
  return (
    <div >
        <div className='relative flex justify-center items-center h-screen'>
            <img src={green} className='-z-40 absolute h-[100vh] w-full'/>
            <div className=' h-[500px] w-[400px] absolute bg-slate-50 p-10 rounded-3xl  space-y-20'>
            <form 
            onSubmit={(e)=>{submithandler(e)}}
            className= ' space-y-5'>
                <div className=''>
                <h3 className='text-xl font-bold w-[100%]'>What's your email</h3>
                <input 
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                className='bg-[#eeeeee] rounded-lg w-[100%] h-11 placeholder:p-3'required type="email" placeholder="Enter yourEmail"/>
                </div>
                <div>
                <h3 className='text-xl font-bold w-[100%] '>What's your password</h3>
                <input 
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className='bg-[#eeeeee] rounded-lg w-[100%] h-11 placeholder:p-3' required type="password" placeholder="Enter your password"/>
                </div>
                <button className=' rounded-lg bg-black text-white w-[100%] h-[50px]'>Login</button>
                <div className='p-1 text-xl'>New here? <Link className='text-green-600' to={"/user-signup"}>Create new Account</Link></div>  
            </form>
            <Link to={"/captain-login"} className='rounded-lg flex justify-center items-center bg-[#10b461] text-white w-[100%] h-[50px]'>Sign in as Captain</Link>
            </div>
            
            
        </div>
    </div>
  )
}

export default UserLogin