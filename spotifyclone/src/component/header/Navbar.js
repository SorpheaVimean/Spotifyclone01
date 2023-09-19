import React from 'react'
import {MdKeyboardArrowLeft} from "react-icons/md"
import {MdKeyboardArrowRight} from "react-icons/md"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-16 w-full bg-slate-900 text-White'>
      <div className=' text-4xl flex ml-4'>
        <MdKeyboardArrowLeft className='mr-4 bg-slate-950 rounded-full p-1'/>
        <MdKeyboardArrowRight className=' bg-slate-950 rounded-full p-1'/>
      </div>
      <div className='mr-16 text-xl '>
        <button className=' text-lg text-slate-600 hover:text-white hover:scale-105'>Sign up</button>
        <button className='ml-20 text-black bg-white px-8 py-3 rounded-3xl font-bold hover:scale-105'>Log in</button>
      </div>
    </div>
  )
}

export default Navbar
