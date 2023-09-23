import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../header/Sidebar'
import Navbar from '../header/Navbar'
import HomePage from '../../page/home/HomePage'
import Footer from '../header/Footer'
import FooterSignup from '../header/FooterSignup'



const Layout = () => {
  return (
    <div className="h-screen p-2 bg-black text-white flex flex-col  justify-center  ">
      <div className="max-w-full h-screen flex  gap-2 overflow-hidden md-[5rem]">
        <Sidebar />
        <div className='w-full ml-1 bg-[#1e1e1e] rounded-xl overflow-hidden '>
          <Navbar />
          <Outlet className=" bg-[#1e1e1e] h-full"/>
          <HomePage  className="  h-full  "/>
          <Footer className=''/>
        </div>
      </div>
      <FooterSignup/>
      
    </div>
  );
}

export default Layout
