import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaXTwitter} from 'react-icons/fa6'
import {BsFacebook} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className=" flex flex-col mt-10 mb-20 ">
      <div className='text-white xl:flex justify-between '>
        <div className='ml-5 xl:flex justify-between gap-64'>
          <div className='mb-10'>
            <p className='mb-5'>Company</p>
            <div className="  text-slate-400 flex flex-col  ">
              <a href="#" className='hover:underline hover:text-white xl:mb-1 sm:xl:mb-1 sm:mb-3'>About</a>
              <a href="#" className='hover:underline hover:text-white xl:mb-1 sm:mb-3'>Jobs</a>
              <a href="#" className='hover:underline hover:text-white xl:mb-1 sm:mb-3'>For the Record</a>
            </div>
          </div>
          <div className='mb-10'>
            <p className='mb-5'>Communities</p>
            <div className="  text-slate-400 flex flex-col  ">
              <a href="https://artists.spotify.com/home" className='hover:underline hover:text-white xl:mb-1 sm:mb-3'>For Artists</a>
              <a href="https://developer.spotify.com/" className='hover:underline hover:text-white xl:mb-1 sm:mb-3'>Developers</a>
              <a href="https://ads.spotify.com/en-US/" className='hover:underline hover:text-white xl:mb-1 sm:mb-3'>Advertising</a>
              <a href="https://investors.spotify.com/home/default.aspx" className='hover:underline hover:text-white xl:mb-1 sm:mb-3'>Investors</a>
              <a href="https://spotifyforvendors.com/" className='hover:underline hover:text-white xl:mb-1 sm:mb-3'>Vendors</a>
            
            </div>
          </div>
          <div className='mb-10'>
            <p className='mb-5'>Useful links</p>
            <div className="  text-slate-400 flex flex-col  ">
              <a href="https://support.spotify.com/kh/" className='hover:underline hover:text-white xl:mb-1 sm:mb-3'>Support</a>
              <a href="https://www.spotify.com/kh/free/" className='hover:underline hover:text-white xl:mb-1 sm:mb-3'>Free Mobile App</a>
              
            </div>
          </div>
        </div>
        <div className='flex mx-11 gap-10 w-96  justify-end items-start'>
          <AiOutlineInstagram className=' bg-zinc-900 hover:bg-zinc-800 w-12 h-12 p-3 flex justify-center items-center rounded-full  text-white'/>
          <FaXTwitter className=' bg-zinc-900 hover:bg-zinc-800 w-12 h-12 p-3 flex justify-center items-center rounded-full  text-white'/>
          <BsFacebook className=' bg-zinc-900 hover:bg-zinc-800 w-12 h-12 p-3 flex justify-center items-center rounded-full  text-white'/>
        </div>
        
        
      </div>
      <hr className='m-[1%]  border-slate-600' />
      <div className='m-5 text-slate-600 '>
          <p>© 2023 Spotify AB</p>
      </div>
    </div>
  );
}

export default Footer





