import React, {useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../header/Sidebar'
import Navbar from '../header/Navbar'
import Footer from '../header/Footer'
import FooterSignup from '../header/FooterSignup'



const Layout = () => {

  return (
    <div className=" h-screen p-2 bg-black text-white flex flex-col  justify-center  min-w-min ">
      <div className="h-screen flex  gap-2 overflow-hidden md-[5rem]">
        <Sidebar className="rounded-xl h-full" />
        <div className='w-full ml-1 bg-[#1e1e1e] rounded-xl  h-full overflow-auto  '>
          <Navbar  className="fixed  overflow-hidden" />
          <Outlet className=" bg-[#1e1e1e] -z-10"/>
          <Footer className=' '/>
        </div>
      </div>
      <FooterSignup/>
      
    </div>
  );
}

export default Layout
