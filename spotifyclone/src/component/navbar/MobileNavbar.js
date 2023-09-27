import React, {useState} from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const MobileNavbar = () => {
  
  return (
    <div>
       
         <div className=' relative z-21 h-screen bg-black text-white w-full  '>
            
         
            <div className=''>
            <div  className='flex  justify-end mr-5 pt-5 text-2xl '>
                <AiOutlineClose className=' hover:scale-110 transition duration-200 ease-in-out '/>
            </div>
            <div className='flex flex-col gap-5 text-2xl pl-6 font-bold w-fit'>
                <a href="#" className=' hover:scale-110 transition duration-200 ease-in-out '>Log in</a>
            <a href="#" className=' hover:scale-110 transition duration-200 ease-in-out '>Sign up</a>
            <hr className='w-10'/>
            <a href="#" className=' hover:scale-110 transition duration-200 ease-in-out '>Premium</a>
            <a href="#" className=' hover:scale-110 transition duration-200 ease-in-out '>Help</a>
            <a href="#" className=' hover:scale-110 transition duration-200 ease-in-out '>Download</a>
            <a href="#" className=' hover:scale-110 transition duration-200 ease-in-out '>Privacy</a>
            <a href="#" className=' hover:scale-110 transition duration-200 ease-in-out '>Terms</a>
            </div>
  
        </div>
        
        </div>
        
      <div className=" w-full h-20  bg-black text-white flex  items-center  justify-between " >
     
        <div className='flex items-center'>
            <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" 
            className=" w-28 ml-2 "
            alt=""
            />
        </div>
        <BiSearchAlt2 className='  z-20   ml-2 text-2xl'/>
        
          <button className='ml-20 text-black bg-white px-8 py-2 rounded-3xl font-bold hover:scale-105 transition duration-200 ease-in-out'>Open App</button>
       
        <AiOutlineMenu className='text-2xl mr-4 '/>
        
      </div>
      
    </div>
  )
}

export default MobileNavbar
