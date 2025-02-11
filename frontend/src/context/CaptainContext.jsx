import React, { createContext, useState } from 'react'


const captaindatacontext = createContext();

const CaptainContext = ({children}) => {
    const [captain,setcaptain]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    const [error,seterror]=useState('');
    const value={
        captain,
        setcaptain,
        isLoading,
        setIsLoading,
        error,
        seterror
    }
  return (
    <captaindatacontext.Provider value={value}>
       {children}
    </captaindatacontext.Provider>
  )
}

export default CaptainContext
export{captaindatacontext}