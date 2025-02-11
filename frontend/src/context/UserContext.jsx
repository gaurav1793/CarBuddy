import React, { createContext, useState } from 'react'

const userdatacontext= createContext();


const UserContext = ({children}) => {
    const [user,setuser]=useState({
      email:'',
      fullName:{
        firstName:'',
        lastName:''
      }
    });
  return (
    <div>
        <userdatacontext.Provider value={{user,setuser}}>
        {children}
        </userdatacontext.Provider>
    </div>
  )
}

export default UserContext
export {userdatacontext}