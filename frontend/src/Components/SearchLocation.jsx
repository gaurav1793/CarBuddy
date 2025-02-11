import React from 'react'

const SearchLocation = () => {

  const locations = [
    "24B, sheryains coding school,BHOPAL",
    "24B, sheryains coding school,BHOPAL",
    "24B, sheryains coding school,BHOPAL",
    "24B, sheryains coding school,BHOPAL"
  ]
  return (
    <div className=' h-[150px] rounded-lg overflow-auto p-3 space-y-2'>

      {
        locations.map(
          function (elem, idx) {
            return <div
              key={idx}
              className='flex gap-4 p-3 border-gray-100  border-2 active:border-black rounded-xl items-center '>
              <h2 className='flex justify-center h-8 items-center rounded-xl'><i class="ri-map-pin-fill"></i></h2>
              <h4 className='font-medium'>{elem}</h4>
            </div>
          }
        )
      }
    </div>
  )
}

export default SearchLocation