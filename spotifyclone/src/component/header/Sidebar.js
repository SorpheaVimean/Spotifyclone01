import React from 'react'
import {Link} from "react-router-dom"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import {VscLibrary} from "react-icons/vsc"
import {LuPlus} from "react-icons/lu"

const Sidebar = () => {
  return (
    <div className="  h-full w-[37rem] rounded-lg">
      <div className=" ml-5   p-6 bg-[#121212] rounded-xl" >
            <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            className=" w-24  " alt=''
            />
            <Link to={"HomePage"}>
                <div className="flex text-xl mt-5 items-center text-gray-400 hover:text-white cursor-pointer duration-700">
                    <AiOutlineHome className="mr-3 " />
                    <h2>Home</h2>
                </div>
            </Link>
            <Link to={"LoginPage"}>
                <div className="flex text-xl mt-5 items-center text-gray-400 hover:text-white cursor-pointer duration-700">
                    <AiOutlineHome className="mr-3 " />
                    <h2>Home</h2>
                </div>
            </Link>
            <Link to={"SignUp"}>
                <div className="flex text-xl mt-5 items-center text-gray-400 hover:text-white cursor-pointer duration-700">
                    <AiOutlineHome className="mr-3 " />
                    <h2>Home</h2>
                </div>
            </Link>
            <div className="flex text-xl mt-5 items-center text-gray-400 hover:text-white cursor-pointer  duration-700">
            <AiOutlineSearch className="mr-3 " />
            <h2>Search</h2>
            </div>
      </div>
      <div className='ml-5 h-full  p-6 bg-[#121212] rounded-xl mt-2 flex flex-col '>
            <div>
                <div className="flex justify-between text-xl   items-center text-gray-400 hover:text-white cursor-pointer duration-700 ">
                    <div className='flex items-center '>
                        <VscLibrary className='mr-3'/>
                        <h2>Your Library</h2>
                    </div>               
                    <LuPlus/>
                </div>
                <div className=' bg-[#1e1e1e] rounded-xl mt-5'>
                    <div className='ml-4 pt-5'>
                        <h3 className=' text-slate-200'>Create your first playlist</h3>
                        <p className=' text-slate-300 text-sm mt-2 mb-8'>It's easy, we'll help you</p>
                        <button className=' bg-white text-black px-4 py-1 rounded-3xl mb-5 hover:scale-105 ' >Create playlist</button>
                    </div>
                </div>
                <div className=' bg-[#1e1e1e] rounded-xl mt-5'>
                    <div className='ml-4 pt-5'>
                        <h3 className=' text-slate-200'>Create your first playlist</h3>
                        <p className=' text-slate-300 text-sm mt-2 mb-8'>It's easy, we'll help you</p>
                        <button className=' bg-white text-black px-4 py-1 rounded-3xl mb-5 hover:scale-105 ' >Create playlist</button>
                    </div>
                </div>
                </div>
            <div className='flex flex-wrap   bg-slate-50 gap-5 text-slate-400 text-xs'>
                <p>Legal</p>
                <p>Privacy Center</p>
                <p>Privacy Policy</p>
                <p>Cookies</p>
                <p>About Ads</p>
                <p>Accessibility</p>
            </div>
      </div>
    </div>
  );
}

export default Sidebar
