import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userdatacontext } from '../context/UserContext';
import axios from 'axios';


const UserProtectWrapper = ({children}) => {
    const navigate=useNavigate();
    const token = localStorage.getItem('token')
    const {user ,setuser}=useContext(userdatacontext);
    const [isLoading,setIsLoading]=useState(true);

  axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
      headers:{
          Authorization:`Bearer ${token}`
      }
    }).then(response=>{
      if(response.status===200){
        setuser(response.data.user);
        setIsLoading(false);
      }
    }).catch(error=>{
      console.log(error);
      localStorage.removeItem('token');
      navigate('/user-login');
    })

    if(isLoading){
      return(
        <div>
          loading.....
        </div>
      )
    }


  return (
    <>
        {children}
    </>
  )
}

export default UserProtectWrapper