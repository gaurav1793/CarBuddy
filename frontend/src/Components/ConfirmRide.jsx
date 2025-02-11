import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setConfirmRidePanel(false)
                }}
                className="mx-auto text-center">
                <i className="ri-arrow-down-double-fill"></i>
            </h5>
            <h3 className="font-semibold text-2xl  ">Confirm your Rider</h3>

            <div className='space-y-4 '>
                <div className='flex flex-col items-center md:flex-row gap-3'>
                    <img className="h-[100px] w-[100px] md:h-[180px] md:w-[450px] rounded-md" src="https://cdn.dribbble.com/userupload/23677889/file/original-cab1e28295022ba7ece0dd37636a329e.gif"
                        alt="vehicle" />

                    <div className= ' w-[90%] space-y-2 '>
                        <div className='flex items-center gap-3  border-gray-400  border-b-2 '>
                            <i className='text-2xl ri-map-pin-2-fill'></i>
                            <div >
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className='text-base text-gray-600'>kankariya talab , bohpal</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 border-gray-400  border-b-2'>
                            <i className='text-2xl ri-map-pin-2-fill'></i>
                            <div >
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className='text-base text-gray-600'>kankariya talab , bohpal</p>
                            </div>
                        </div>
                    </div >
                    <div className='flex items-center gap-2'>
                            <i className='text-2xl ri-currency-line'></i>
                            <h3 className='text-lg font-medium'>₹193</h3>
                            <p className='text-base text-gray-600'>Cash Only</p>
                        </div>
                </div>
                <button
                onClick={()=>{
                    props.setLookingRidePanel(true);
                    props.setConfirmRidePanel(false);
                }}
                className='w-full h-[50px] bg-green-500 rounded-lg text-white text-center'>Confirm</button>
            </div>


        </div>
    )
}

export default ConfirmRide