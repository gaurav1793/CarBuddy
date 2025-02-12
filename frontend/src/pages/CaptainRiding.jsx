import React, { useRef, useState } from 'react'
import { Link } from "react-router";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import FinishRide from '../Components/FinishRide';


const CaptainRiding = () => {

const [finishedRidePanel, setfinishedRidePanel] = useState(false)
const finishedRidePanelRef = useRef(null)

  useGSAP(function(){
    if(finishedRidePanel){
        gsap.to(finishedRidePanelRef.current ,{
            transform:'translateY(0)'
        })
    }
    else{
        gsap.to(finishedRidePanelRef.current ,{
            transform:'translateY(100%)'
        })
    }
},[finishedRidePanel])

  return (
    <div className=" top-0 flex items-center justify-center min-h-screen  bg-gray-100 relative">
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='h-10 ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5Bg9z1OmpdRYO0zt0tM52sQHazaPAEI8kQ&s' alt="logo"/>
          <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
        <div className="flex-1 w-full sm:h-3/5 lg:h-4/5 flex items-center justify-center">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt="Ride Illustration"
            className="w-full min-h-screen object-fill"
          />
        </div>
        
        <div 
        onClick={()=>{
            setfinishedRidePanel(true)
        }}
        className="h-1/5 space-y-2 drop-shadow-2xl fixed  bottom-0 z-10 bg-yellow-400 max-w-5xl w-full p-3 rounded-md px-5 ">
        <h5
                onClick={() => {
                    props.setridePopupPanel(false);
                }}
                className="mx-auto text-center">
                <i className="ri-arrow-up-double-fill"></i>
        </h5>
            <div className='flex items-center justify-between'>
            <h4 className='text-xl font-semibold'>4 km away</h4>
            <button className='p-3 h-[50px] bg-green-500 rounded-lg text-white text-center px-8'>Complete Ride</button>
            </div>
        </div>
        <div ref={finishedRidePanelRef} className=" translate-y-full inset-shadow-sm inset-shadow-indigo-500 drop-shadow-2xl fixed  bottom-0 z-10 bg-white max-w-5xl w-full p-5 rounded-md space-y-2 ">
            <FinishRide setfinishedRidePanel={setfinishedRidePanel}/>
        </div>
      </div>
  )
}

export default CaptainRiding