import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import {MdKeyboardArrowLeft} from "react-icons/md"
import {MdKeyboardArrowRight} from "react-icons/md"
import {BiSearchAlt2} from "react-icons/bi"
import MobileNavbar from './MobileNavbar'

const Navbar = (props) => {
  const [changeNav, setChangeNave] = useState(false)
  const navigate = useNavigate();
  return (
    <div>
      <div className="">
        <MobileNavbar />
      </div>
       
    <div className=' flex justify-between items-center h-16 w-full bg-[#121212] text-White   '>
      <div className=' text-4xl flex ml-4 justify-between w-auto'>
        <div className='flex'>
          <MdKeyboardArrowLeft className='mr-4 bg-slate-950 rounded-full p-1' onClick={() => navigate(-1)}/>
          <MdKeyboardArrowRight className=' bg-slate-950 rounded-full p-1' onClick={() => navigate(1)}/>
        </div>
        { props.search ? 
           <div  className='flex items-center ml-[4%] relative text-2xl w-full   '>
           <BiSearchAlt2 className=' absolute z-20 right-50  ml-2 hover:cursor-pointer'/>
           
             <input 
           type="search"
           placeholder='What do you want to listen to?'
           className='   bg-[#1e1e1e]  p-1 w-full rounded-full text-[0.8rem] pl-9 pr-5 border-1 '
           />
       </div> : null
        }
      </div>
      <div className='mr-16 text-xl  z-20'>
        <Link to={"SignupPage"}>
          <button className=' text-lg text-slate-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out'>Sign up</button>
        </Link>
        <Link to={"LoginPage"}>
          <button className='ml-20 text-black bg-white px-8 py-2 rounded-3xl font-bold hover:scale-105 transition duration-200 ease-in-out'>Log in</button>
        </Link>
      </div>
      
    </div>
    </div>
  )
}

export default Navbar
