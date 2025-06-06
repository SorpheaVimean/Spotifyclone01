import React from 'react'
import { Link } from 'react-router-dom'
const FooterSignup = () => {
  return (
    <div className=' hidden md:block'>
      <div className=" h-20 flex  justify-between items-center w-full bg-gradient-to-r from-pink-700 to-cyan-400 mt-2 ">
        <div className='ml-4'>
        <p>PREVIEW OF SPOTIFY</p>
        <p> Sign up to get unlimited songs and podcasts with occasional ads. No creadit card needed.</p>
      </div>
      <Link to={"SignupPage"}>
        <button className='mr-16 text-black bg-white px-8 py-3 rounded-3xl font-bold hover:scale-105 transition duration-200 ease-in-out'>Sign up free</button>
      </Link>
      </div>
      
    </div>
  )
}

export default FooterSignup
