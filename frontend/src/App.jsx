import React from 'react'
import './App.css'
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom"
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import Captainlogin from './pages/Captainlogin'
import UserContext from './context/UserContext'
import Start from './pages/Start'
import Home from '../src/pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainContext from './context/CaptainContext'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Start />
    </div>
  },
  {
    path: "/user-login",
    element: <div>
      <UserLogin />
    </div>
  },
  {
    path: "/user-signup",
    element: <div>
      <UserSignup />
    </div>
  },
  {
    path: "/captain-signup",
    element: <div>
      <CaptainSignup />
    </div>
  },
  {
    path: "/captain-login",
    element: <div>
      <Captainlogin />
    </div>
  }, {
    path: "/home",
    element: <div>
      <UserProtectWrapper>
        <Home />
      </UserProtectWrapper>
    </div>
  },
  {
    path: "/user-logout",
    element: <div>
      <UserProtectWrapper>
        <UserLogout />
      </UserProtectWrapper>
    </div>
  },
  {
    path: "/captain-home",
    element: <div>
      <CaptainProtectWrapper>
        <CaptainHome/>
      </CaptainProtectWrapper>
    </div>
  }

])


function App() {
  return (
    <>
      <CaptainContext>
        <UserContext>
          <RouterProvider router={router} />
        </UserContext>
      </CaptainContext>
    </>
  )
}

export default App
