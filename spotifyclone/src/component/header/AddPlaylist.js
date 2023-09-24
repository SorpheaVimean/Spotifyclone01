import React from 'react'
import {PiMusicNotesPlusLight} from "react-icons/pi"
import { AiOutlineFolder} from "react-icons/ai"
const AddPlaylist = () => {
  return (
    <div>
       <div className=' absolute z-20 mt-3 bg-[#1e1e1e]  shadow-2xl rounded-md p-2 ' >
                        <div className='flex justify-center items-center  hover:bg-zinc-800 p-3 translate cursor-default duration-200 ease-in-out '>
                            <PiMusicNotesPlusLight className='text-white'/>
                            <p className=' text-xs text-white ml-2'>Create a playlists folder</p>
                        </div>
                        <div className='flex justify-center items-center  hover:bg-zinc-800 p-3 translate cursor-default duration-200 ease-in-out '>
                            <AiOutlineFolder className='text-white'/>
                            <p className=' text-xs text-white ml-2'>Create a playlists folder</p>
                        </div>
                     </div>
    </div>
  )
}

export default AddPlaylist
