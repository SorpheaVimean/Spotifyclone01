import React, {useState, useEffect, useRef} from 'react'
import {Link} from "react-router-dom"
import {AiOutlineHome, AiOutlineSearch} from "react-icons/ai"
import {VscLibrary} from "react-icons/vsc"
import { LuPlus} from "react-icons/lu"
import {TfiWorld} from "react-icons/tfi"
import AddPlaylist from './AddPlaylist'


const Sidebar = (props) => {

  useEffect(() =>{
    props.setSearch(props.search)
  }, [AiOutlineSearch])

  // Add playlists
    const [addplaylist, setAddPlaylist] = useState(false);
    let useClickOutside = (handler) => {
      let menuref = useRef();
      useEffect(() => {
        let maybeHandler = (event) => {
          if ((!menuref.current.contains(event.target))) {
            handler();
          }
        };
        document.addEventListener("mousedown", maybeHandler);
        return () => {
          document.removeEventListener("mousedown", maybeHandler);
        };
      });
      return menuref;
    };
    let menuref = useClickOutside(() =>{
        setAddPlaylist(false);
    })
  return (
    <div className="  h-full w-[37rem] rounded-lg     ">
      <div className=" ml-1   p-6 bg-[#121212] rounded-xl" >
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
            
            <Link to={"SearchPage"} onClick = {() => props.setSearch(!props.search)} >
                <div className="flex text-xl mt-5 items-center text-gray-400 hover:text-white cursor-pointer  duration-700">
                    <AiOutlineSearch className="mr-3 " />
                    <h2>Search</h2>
                </div>
            </Link>
      </div>
      <div className='ml-1  h-[80%]  p-6 bg-[#121212] rounded-xl mt-2 flex justify-between flex-col  '>
            <div>
                <div className="flex justify-between text-xl   items-center text-gray-400 duration-700 ">
                    <div className='flex items-center  cursor-pointer  hover:text-white duration-700 '>
                        <VscLibrary className='mr-3'/>
                        <h2>Your Library</h2>
                    </div> 
                    <div ref={menuref} className=' '>
                     <LuPlus className=' cursor-pointer  hover:text-white duration-700' title='Crate playlists or folders'  onClick={ () => setAddPlaylist(pre => !pre)}/>
                        { addplaylist && <AddPlaylist/>}
                    </div>              
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

            <div>
                <div className='flex flex-wrap  bottom-0   gap-5 text-slate-400 text-xs'>
                    <p>Legal</p>
                    <p>Privacy Center</p>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                    <p>About Ads</p>
                    <p>Accessibility</p>   
                </div>
                <div className='flex flex-col mt-5'>
                    <a href='#' className=' text-slate-400 text-xs hover:underline'>Cookies</a>           
                </div>
               <button className=' text-white text-sm border-2 border-slate-400  px-2 py-1 rounded-3xl my-5 hover:scale-105 flex justify-center items-center' >
                <TfiWorld className='mr-2'/>
                English
               </button>
            </div>
            

      </div>
    </div>
  );
}

export default Sidebar
