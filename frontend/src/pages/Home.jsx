import React from 'react'
import logo from '../assets/car.jpg'
import vid from '../assets/bg-vid.mp4'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className=' h-[100vh] w-full bg-black relative '>
                <video src={vid} autoPlay loop muted className='-z-50 h-[100vh] w-[100%] object-cover'/>
                 <div className='flex space-x-10 z-50 absolute top-36 left-32 right-32'>
                    <div className='h-[500px] w-[700px] ' >
                        <img src={logo} className='h-[100%] rounded-3xl'/>
                    </div>
                    <div className='h-[500px] w-[700px] bg-slate-200 flex flex-col items-center
                     justify-center space-y-28 rounded-3xl'>
                        <div>
                        <div className='text-[40px] font-black'>Get Started with CarBuddy</div>
                        <div className=' text-[20px] font-medium '>Request a ride for now or later</div>
                        </div>
                        <Link to={"/user-login"} className='flex justify-center items-center h-[60px] w-[560px]  bg-black text-white rounded-3xl'>Continue</Link>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Home


/*

 <img src={logo}
                    className='h-[70vh] w-[70vh]'  />
                <div className='h-[20vh] bg-white  flex flex-col item-center justify-between'>
                    <h2>Get Started with CarBuddy</h2>
                    <button className='bg-white rounded-xl'>Continue</button>
                </div>


*/