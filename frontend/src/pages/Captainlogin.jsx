import React, { useState } from 'react'
import orange from '../assets/oo.jpeg'
import { Link } from 'react-router-dom'

const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captaindata  ,setcaptaindata] = useState({});

  const submithandler=(e)=>{
    e.preventdefault();

    setcaptaindata({
      email:email,
      password:password
    })
    setEmail('');
    setPassword('');
  }
  return (
    <div >
        <div className='relative flex justify-center items-center h-screen'>
            <img src={orange} className='-z-40 absolute h-[100vh] w-full'/>
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
                <div className='p-1 text-xl'>New here? <Link className='text-[#d5622d]' to={"/captain-signup"}>Register as a captian</Link></div>  
            </form>
            <Link to={"/user-login"} className='rounded-lg flex justify-center items-center bg-[#d5622d] text-white w-[100%] h-[50px]'>Sign in as User</Link>
            </div>
            
            
        </div>
    </div>
  )
}

export default Captainlogin