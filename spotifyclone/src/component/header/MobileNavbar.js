import React, {useState, useEffect} from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
  const [mobilenav, setMobilenav] = useState(false)
  useEffect(() =>{
    setMobilenav(!mobilenav)
  }, [])
  return (
    <div className=' relative z-10 h-full'>
       
        
        
      <div className=" w-full h-20  bg-black text-white flex  items-center  justify-between " >
     
        <div className='flex items-center'>
            <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" 
            className=" w-28 ml-2 "
            alt=""
            />
        </div>
        <BiSearchAlt2 className=' ml-2 text-2xl'/>
        
          <button className={ `ml-20 text-black bg-white px-8 py-2 rounded-3xl font-bold hover:scale-105 transition duration-200 ease-in-out ` }>Open App</button>
       
        <AiOutlineMenu className='text-2xl mr-4 ' onClick={() => setMobilenav(!mobilenav)}/>
        
      </div>
      {/* {mobilenav ?  */}
        <div className={ ` absolute top-0 h-screen bg-black text-white w-full ${!mobilenav && "translate-x-[70rem] opacity-10"}   transition duration-500 ease-in-out`} >
          <div className=''>
            <div  className='flex  justify-end mr-5 pt-5 text-2xl '>
                <AiOutlineClose className=' hover:scale-110 transition duration-200 ease-in-out ' onClick={() => setMobilenav(false)}/>
            </div>
            <div className={`flex flex-col gap-5 text-2xl pl-6 font-bold w-fit `}>
            
              <Link to={"LoginPage"} className=' hover:scale-110 transition duration-200 ease-in-out '>
                <a>Log in</a>
              </Link>
              <Link to={"SignupPage"} className=' hover:scale-110 transition duration-200 ease-in-out '>
                  <a>Sign up</a>
              </Link>
                <hr className='w-10'/>
                <a href="#" className=' hover:scale-110 transition duration-200 ease-in-out '>Premium</a>
                <a href="#" className=' hover:scale-110 transition duration-200 ease-in-out '>Help</a>
                <a href="#" className=' hover:scale-110 transition duration-200 ease-in-out '>Download</a>
                <a href="#" className=' hover:scale-110 transition duration-200 ease-in-out '>Privacy</a>
                <a href="#" className=' hover:scale-110 transition duration-200 ease-in-out '>Terms</a>
            </div>

          </div> 
        </div> 
      {/* } */}
      
    </div>
  )
}

export default MobileNavbar
