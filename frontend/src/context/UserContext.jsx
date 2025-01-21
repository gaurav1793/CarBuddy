import React, { createContext, useState } from 'react'

const userdatacontext= createContext();


const UserContext = ({children}) => {
    const [value,setvalue]=useState('');
  return (
    <div>
        <userdatacontext.Provider value={value}>
        {children}
        </userdatacontext.Provider>
    </div>
  )
}

export default UserContext