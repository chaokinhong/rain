import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import LoginPage from './components/login'
import SignupPage from './components/signup'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
}

export default Router
