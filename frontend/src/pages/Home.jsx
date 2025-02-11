import React, { useEffect, useRef, useState } from "react";
import SearchLocation from "../Components/SearchLocation";
import 'remixicon/fonts/remixicon.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import VehiclePanelPage from "../Components/VehiclePanelPage";
import ConfirmRide from "../Components/ConfirmRide";
import LookingForDriver from "../Components/LookingForDriver";
import WaitingForDriver from "../Components/WaitingForDriver";


const Home = () => {
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [panel, setPanel] = useState(false);
    const [destpanel, setDestPanel] = useState(false);
    const opendiv = useRef(null);
    const destpandeldiv = useRef(null);
    const VehiclePanelRef = useRef(null)
    const [VehiclePanel,setVehiclePanel]=useState(false)
    const [ConfirmRidePanel,setConfirmRidePanel]=useState(false)
    const ConfirmRidePanelRef=useRef(null)
    const [LookingRidePanel,setLookingRidePanel]=useState(false)
    const LookingRidePanelRef=useRef(null)
    const [waitingForDriver,setwaitingForDriver]=useState(false);
    const WaitingForDriverRef = useRef(null)

    const handlePickupClick = () => setPanel(true);
    const handledestClick = () => setDestPanel(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Pickup:", pickup, "Destination:", destination);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (opendiv.current && !opendiv.current.contains(event.target)) {
                setPanel(false);
            }
            if (destpandeldiv.current && !destpandeldiv.current.contains(event.target)) {
                setDestPanel(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useGSAP(function(){
        if(VehiclePanel){
            gsap.to(VehiclePanelRef.current ,{
                transform:'translateY(0)'
            })
        }
        else{
            gsap.to(VehiclePanelRef.current ,{
                transform:'translateY(100%)'
            })
        }
    },[VehiclePanel])

    useGSAP(function(){
        if(waitingForDriver){
            gsap.to(WaitingForDriverRef.current ,{
                transform:'translateY(0)'
            })
        }
        else{
            gsap.to(WaitingForDriverRef.current ,{
                transform:'translateY(100%)'
            })
        }
    },[waitingForDriver])

    useGSAP(function(){
        if(LookingRidePanel){
            gsap.to(LookingRidePanelRef.current ,{
                transform:'translateY(0)'
            })
        }
        else{
            gsap.to(LookingRidePanelRef.current ,{
                transform:'translateY(100%)'
            })
        }
    },[LookingRidePanel])

    useGSAP(function(){
        if(ConfirmRidePanel){
            gsap.to(ConfirmRidePanelRef.current ,{
                transform:'translateY(0)'
            })
        }
        else{
            gsap.to(ConfirmRidePanelRef.current ,{
                transform:'translateY(100%)'
            })
        }
    },[ConfirmRidePanel])

    return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
                {/* Card */}
                
                <div className="bg-white shadow-lg rounded-xl flex flex-col lg:flex-row overflow-hidden max-w-5xl w-full">
                    
                <div className="flex-1 w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
                        <img
                            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                            alt="Ride Illustration"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    {/* Left Section */}
                    <div className="flex-1 p-6 sm:p-8 lg:p-10 space-y-6">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                            Get a ride in minutes
                        </h2>
                        <p className="text-gray-600">
                            Whether you’re heading to work, a meeting, or a night out, we’ve got
                            you covered. Enter your details and enjoy the ride!
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="relative" ref={opendiv}>
                                <input
                                    type="text"
                                    value={pickup}
                                    onChange={(e) => setPickup(e.target.value)}
                                    onClick={handlePickupClick}
                                    placeholder="Pickup Location"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                />
                                {panel && (
                                    <div className="absolute bottom-full w-full bg-white shadow-md rounded-md">
                                        <SearchLocation VehiclePanel={VehiclePanel} setVehiclePanel={setVehiclePanel} />
                                    </div>
                                )}
                            </div>
                            <div className="relative" ref={destpandeldiv}>
                                <input
                                    type="text"
                                    onClick={handledestClick}
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    placeholder="Destination"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                />
                                {destpanel && (
                                    <div className="absolute bottom-full w-full bg-white shadow-md rounded-md">
                                        <SearchLocation />
                                    </div>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-400 text-white font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-all"
                                onClick={()=>{
                                    setVehiclePanel(true);
                                }}
                            >
                                Request Ride
                            </button>
                        </form>
                    </div>
                    
                </div>
                               
                {/* Bottom Section */}
                <div  ref={VehiclePanelRef} className="inset-shadow-sm inset-shadow-indigo-500 drop-shadow-2xl fixed  bottom-0 z-10 bg-white max-w-5xl w-full p-5 rounded-md space-y-2 translate-y-full">
                    <VehiclePanelPage setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
                </div>

                <div  ref={ConfirmRidePanelRef} className="inset-shadow-sm inset-shadow-indigo-500 drop-shadow-2xl fixed  bottom-0 z-10 bg-white max-w-5xl w-full p-5 rounded-md space-y-2 translate-y-full">
                    <ConfirmRide setLookingRidePanel={setLookingRidePanel} setConfirmRidePanel={setConfirmRidePanel} />
                </div>

                <div  ref={LookingRidePanelRef} className="inset-shadow-sm inset-shadow-indigo-500 drop-shadow-2xl fixed  bottom-0 z-10 bg-white max-w-5xl w-full p-5 rounded-md space-y-2 translate-y-full">
                    <LookingForDriver setLookingRidePanel={setLookingRidePanel}/>
                </div>

                <div ref={WaitingForDriverRef} className="inset-shadow-sm inset-shadow-indigo-500 drop-shadow-2xl fixed  bottom-0 z-10 bg-white max-w-5xl w-full p-5 rounded-md space-y-2 translate-y-full ">
                    <WaitingForDriver setwaitingForDriver={setwaitingForDriver}/>
                </div>

                {/* */}
            </div>
        

    );
};

export default Home;
