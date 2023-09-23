import React from 'react'
import { Link } from 'react-router-dom'
import {MdKeyboardArrowLeft} from "react-icons/md"
import {MdKeyboardArrowRight} from "react-icons/md"


const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-16 w-full bg-[#121212] text-White  '>
      <div className=' text-4xl flex ml-4'>
        <MdKeyboardArrowLeft className='mr-4 bg-slate-950 rounded-full p-1'/>
        <MdKeyboardArrowRight className=' bg-slate-950 rounded-full p-1'/>
      </div>
      <div className='mr-16 text-xl '>
        <Link to={"SignupPage"}>
          <button className=' text-lg text-slate-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out'>Sign up</button>
        </Link>
        <Link to={"LoginPage"}>
          <button className='ml-20 text-black bg-white px-8 py-2 rounded-3xl font-bold hover:scale-105 transition duration-200 ease-in-out'>Log in</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Navbar
