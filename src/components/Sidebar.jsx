import React from 'react'
import {FaDiscord} from 'react-icons/fa'
import {BiPlus} from 'react-icons/bi'
import {IoMdCompass} from 'react-icons/io'
import { TbDownload} from 'react-icons/tb'
const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 bg-sidebar-bg flex flex-col shadow-lg '>
      <div className='sidebar-discord-icon group'><FaDiscord size='28' /><span className='sidebar-tooltip group-hover:scale-100 '>Discord</span></div>
      <div className='sidebar-br'></div>
      <div className='sidebar-icon group'><BiPlus size='28' /><span className='sidebar-tooltip group-hover:scale-100'>Add a server</span></div>
      <div className='sidebar-icon group'><IoMdCompass size='28' /><span className='sidebar-tooltip group-hover:scale-100'>Search</span></div>
      <div className='sidebar-br'></div>
      <div className='sidebar-icon group'><TbDownload size='28' /><span className='sidebar-tooltip group-hover:scale-100'>Download</span></div>
    </div>
  )
}

export default Sidebar
