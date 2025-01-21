import React from 'react'
import './App.css'
import {createBrowserRouter , NavLink, RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import Captainlogin from './pages/Captainlogin'
import UserContext from './context/UserContext'

const router=createBrowserRouter([
    {
        path: "/",
        element: <div>
          <Home/>
        </div>
    },
    {
      path: "/user-login",
      element: <div>
        <UserLogin/>
      </div>
    },
    {
      path: "/user-signup",
      element: <div> 
        <UserSignup/>
      </div> 
    },
    {
      path: "/captain-signup",
      element: <div>
        <CaptainSignup/>
      </div>
    },
    {
      path: "/captain-login",
      element: <div>
        <Captainlogin/> 
      </div>
    }

])


function App() {
  return (
    <>
      <UserContext>
      <RouterProvider router={router}/>
      </UserContext>
    </>
  )
}

export default App
