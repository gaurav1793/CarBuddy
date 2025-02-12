import React, { useRef, useState } from 'react'
import { Link } from "react-router";
import CaptainDetails from '../Components/CaptainDetails';
import RidePopUp from '../Components/RidePopUp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ConfirmRidePopUp from '../Components/ConfirmRidePopUp';

const CaptainHome = () => {
  const [ridePopupPanel, setridePopupPanel] = useState(true)
  const ridePopupPanelRef = useRef(null)

  const [ConfirmridePopupPanel, setConfirmridePopupPanel] = useState(false)
  const ConfirmridePopupPanelRef = useRef(null)

  useGSAP(function(){
    if(ridePopupPanel){
        gsap.to(ridePopupPanelRef.current ,{
            transform:'translateY(0)'
        })
    }
    else{
        gsap.to(ridePopupPanelRef.current ,{
            transform:'translateY(100%)'
        })
    }
},[ridePopupPanel])

useGSAP(function(){
  if(ConfirmridePopupPanel){
      gsap.to(ConfirmridePopupPanelRef.current ,{
          transform:'translateY(0)'
      })
  }
  else{
      gsap.to(ConfirmridePopupPanelRef.current ,{
          transform:'translateY(100%)'
      })
  }
},[ConfirmridePopupPanel])

  return (
    
      <div className="flex items-center justify-center min-h-screen top-0 bg-gray-100 relative">

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
        <div className="h-2/5 inset-shadow-sm inset-shadow-indigo-500 drop-shadow-2xl fixed  bottom-0 z-10 bg-white max-w-5xl w-full p-6 rounded-md  ">
          <CaptainDetails/>
        </div>
        <div ref={ridePopupPanelRef} className=" translate-y-full inset-shadow-sm inset-shadow-indigo-500 drop-shadow-2xl fixed  bottom-0 z-10 bg-white max-w-5xl w-full p-5 rounded-md space-y-2 ">
            <RidePopUp setridePopupPanel={setridePopupPanel} setConfirmridePopupPanel={setConfirmridePopupPanel}   />
        </div>
        <div ref={ConfirmridePopupPanelRef} className=" translate-y-full inset-shadow-sm inset-shadow-indigo-500 drop-shadow-2xl fixed  bottom-0 z-10 bg-white max-w-5xl w-full p-5 rounded-md space-y-2 ">
            <ConfirmRidePopUp setConfirmridePopupPanel={setConfirmridePopupPanel} setridePopupPanel={setridePopupPanel} />
        </div>
      </div>
    
  )
}

export default CaptainHome