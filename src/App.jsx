import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import HomePage from './components/HomePage'
function App() {

  return (
    <>
    <div className='relative z-10'>
    <Sidebar />
    </div>
    <HomePage />
    </>
  )
}

export default App
