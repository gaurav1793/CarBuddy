import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { captaindatacontext } from '../context/CaptainContext';
import axios from 'axios'

const CaptainProtectWrapper = ({children}) => {
    const {captain,setcaptain}=useContext(captaindatacontext);
    const [isLoading,setIsLoading]=useState(true);
    const navigate=useNavigate();
    const token =localStorage.getItem('captain-token');

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers:{
            Authorization:`bearer ${token}`
        }
    }).then(response=>{
        if(response.status===200){
            setcaptain(response.data.captain);
            setIsLoading(false)
        }
    }).catch(error=>{
        console.log(error); 
        localStorage.removeItem('captain-token');
        navigate('/captain-login');
    })


    if(isLoading){
        return(<div>loading....pls wait</div>)
    }

  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectWrapper