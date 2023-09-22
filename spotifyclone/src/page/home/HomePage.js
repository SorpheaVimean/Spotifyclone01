import React from 'react'
import {BsFillPlayFill} from 'react-icons/bs'
const HomePage = () => {
  const playLists = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className=" h-full bg-[#1e1e1e] text-black  overflow-auto ">
      <div className="flex justify-between  mb-3 text-white mx-4 mt-4 ">
        <h1 className=" font-bold text-xl hover:underline cursor-pointer">
          Spotify Playlists
        </h1>
        <p>Show all</p>
      </div>

      <div className="  w-full  grid gap-4   grid-cols-2 md:grid-cols-3 xl:grid-cols-8">
        {playLists.map(() => (
          <div className=" relative  bg-zinc-900 hover:bg-zinc-800 p-5 rounded-md  sm:w-60 xl:w-44 text-white group hover:cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdex_OiitYqnV-1cq32D6EP7SL0HvlqRLBg&usqp=CAU"
              className=" object-cover sm:h-44 xl:h-32 rounded-lg "
            />
            <p className=" text-[1.1rem] mt-3">Today's Top Hits</p>
            <p className=" text-gray-400 text-[.7rem] mt-2">
              Zach Brytan & Kacey are Musgraves are on the top of the Hottest
              50!
            </p>
            <div className=" bg-green-600 xl:text-xl sm:text-3xl xl:top-24 sm:top-32 xl:left-24 sm:left-36 xl:w-10 max-w-xl sm:w-14 xl:h-10 sm:h-14 flex justify-center items-center text-black  rounded-full  absolute shadow-md opacity-0  group-hover:opacity-100 translate-y-4  group-hover:translate-y-0 transition duration-200 ease-in-out">
              <BsFillPlayFill />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage
