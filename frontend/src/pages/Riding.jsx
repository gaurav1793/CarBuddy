import React from 'react'

const Riding = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen top-0 bg-gray-100 px-4 sm:px-6 lg:px-8 relative">
            <div className="bg-white shadow-lg rounded-xl flex flex-col lg:flex-row justify-center items-center overflow-hidden  max-w-5xl w-full">
                <div className="flex-1  sm:h-[80vh] sm:w-[90vw] lg:h-full flex items-center justify-center p-4 lg:p-8">
                    <img
                        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                        alt="Ride Illustration"
                        className="w-full min-h-screen object-fill"
                    />
                </div>
            </div>
            <div className="inset-shadow-sm inset-shadow-indigo-500 drop-shadow-2xl fixed  bottom-0 z-10 bg-white max-w-5xl w-full p-5 rounded-md space-y-2 ">
                <div className='space-y-4 '>
                    <div className='flex flex-col items-center md:flex-row gap-3'>
                        <img className="h-[100px] w-[100px] md:h-[180px] md:w-[450px] rounded-md" src="data:image/jpeg;base64,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"
                            alt="vehicle" />

                        <div className=' w-[90%] space-y-2 '>
                            <div className='flex items-center gap-3 '>
                                <i className='text-2xl ri-taxi-fill'></i>
                                <div >
                                    <h3 className='text-lg font-medium'>Gaurav Kataria</h3>
                                    <p className='text-base text-gray-700'>MP04 AB 1234</p>
                                    <p className='text-base text-gray-600'>maruti suzuki alto</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
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

                </div>
                <button className='w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition'>make a payment</button>
            </div>
        </div>
        </div>
    )
}

export default Riding