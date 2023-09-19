import React from 'react'
// import { Link } from 'react-router-dom'
import Sidebar from '../header/Sidebar'
import Navbar from '../header/Navbar'

const Layout = () => {
  return (
    <div className="h-screen p-2 bg-black text-white flex flex-col overflow-hidden justify-center">
      <div className="max-w-full h-screen flex  gap-2 overflow-hidden md-[5rem]">
        <Sidebar />
        <div className='w-full ml-4'>
          <Navbar />
          Main Content
        </div>
      </div>
    </div>
  );
}

export default Layout
