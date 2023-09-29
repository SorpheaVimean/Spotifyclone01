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
    <div className="  ">
      <div className=" z-0 text-black   ">
        <div className="flex justify-between  mb-3 text-white mx-4 mt-4 ">
          <h1 className=" font-bold text-xl hover:underline cursor-pointer">
            Spotify Playlists
          </h1>
          <p
            className=" hover:underline cursor-pointer text-gray-400"
            onClick={() => loadMore()}
          >
            Show all
          </p>
        </div>

        {/* Playlists Card */}
        <div className="   grid xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 xs:gap-3 grid-cols-2 md:grid-cols-4 xl:grid-cols-7 lg:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2   p-5">
          {show.map(() => (
            <div className="   bg-zinc-900 hover:bg-zinc-800 p-5 rounded-md  xl:h-full  w-fit text-white group hover:cursor-pointer">
              <div className="  relative ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAQLoc-B6lyK7t1JouIQLfPtByCInlioOvA&usqp=CAU"
                  className=" object-cover sm:h-[50%] xl:h-[40%] w-auto rounded-lg  -z-10 "
                  alt=""
                />
                <div className=" bg-green-600  flex justify-center items-center text-black bottom-2 right-0 mr-3   p-2 rounded-full  absolute shadow-md opacity-0  group-hover:opacity-100 translate-y-4  group-hover:translate-y-0 transition duration-200 ease-in-out">
                  <BsFillPlayFill className="text-4xl xl:text-3xl" />
                </div>
              </div>
              <p className=" text-5 mt-3 line-clamp-1">Today's Top Hits </p>
              <p className=" text-gray-400 sm:text-[.4rem] xl:text-[.8rem] mt-2 line-clamp-2 ">
                {" "}
                Zach Brytan & Kacey are Musgraves are on the top of the Hottest
                50!{" "}
              </p>
            </div>
          ))}
        </div>
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default HomePage
