import React, {useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../header/Sidebar'
import Navbar from '../header/Navbar'
import HomePage from '../../page/home/HomePage'
import Footer from '../header/Footer'
import FooterSignup from '../header/FooterSignup'



const Layout = () => {
  const [search, setSearch] = useState(false);
  return (
    <div className=" h-screen p-2 bg-black text-white flex flex-col  justify-center  min-w-min ">
      <div className="h-screen flex  gap-2 overflow-hidden md-[5rem]">
        <Sidebar className="rounded-xl h-full" search={search} setSearch={setSearch}/>
        <div className='w-full ml-1 bg-[#1e1e1e] rounded-xl  h-full overflow-auto  '>
          <Navbar search={search} className="fixed lg:w-full" />
          <Outlet className=" bg-[#1e1e1e] -z-10"/>
          {/* <HomePage  className="   "/> */}
          <Footer className=' '/>
        </div>
      </div>
      <FooterSignup/>
      
    </div>
  );
}

export default Layout
