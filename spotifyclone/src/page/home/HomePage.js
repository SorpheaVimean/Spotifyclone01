import React, {useState} from 'react'
import {BsFillPlayFill} from 'react-icons/bs'
// import Footer from '../header/Footer';
// import Footer from '../../component/header/Footer';



const HomePage = () => {
  const playLists = [1, 2, 3, 4, 5, 6, 7, 8];
  const [showmore, setShowmore] = useState(7);
  const loadMore = () =>{
    setShowmore(showmore + showmore );
  }
  const show = playLists.slice(0, showmore);
  return (
    <div className='  '>
      <div className=" h-full  text-black  overflow-auto ">
      <div className="flex justify-between  mb-3 text-white mx-4 mt-4 ">
        <h1 className=" font-bold text-xl hover:underline cursor-pointer">
          Spotify Playlists
        </h1>
        <p className=' hover:underline cursor-pointer text-gray-400' onClick={() => loadMore()}>Show all</p>
      </div>

      {/* Playlists Card */}
      <div className="  w-full  grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-7 p-5">
        {show.map(() => (
          <div className="   bg-zinc-900 hover:bg-zinc-800 p-5 rounded-md sm:h-80 xl:h-72 sm:w-48 xl:w-46 text-white group hover:cursor-pointer">
            <div className='relative'>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAQLoc-B6lyK7t1JouIQLfPtByCInlioOvA&usqp=CAU"
              className=" object-cover sm:h-[70%] xl:h-[40%] w-full rounded-lg "
              alt=''
            />
             <div className=" bg-green-600  flex justify-center items-center text-black bottom-2 right-0 mr-3   p-2 rounded-full  absolute shadow-md opacity-0  group-hover:opacity-100 translate-y-4  group-hover:translate-y-0 transition duration-200 ease-in-out">
              <BsFillPlayFill className='text-4xl xl:text-3xl'/>
            </div>
            </div> 
            <p className=" text-[1.1rem] mt-3">Today's Top Hits </p>
            <p className=" text-gray-400 sm:text-[.6rem] xl:text-[.8rem] mt-2 xl:line-clamp-2 sm:line-clamp-0"> Zach Brytan & Kacey are Musgraves are on the top of the Hottest 50! </p>
           
          </div>

        ))}
       

      </div>
       {/* <Footer/> */}
    </div>
   
    </div>
  );
}

export default HomePage
