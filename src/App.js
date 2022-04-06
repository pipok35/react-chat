import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
    </Routes>
  )
}
