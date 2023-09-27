import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
const SearchPage = () => {

  const Search = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  return (

    <div className=''>
      <div className='flex items-center ml-[4%] relative text-2xl w-auto '>
        <BiSearchAlt2 className=' absolute z-20 right-50  ml-2'/>
        
          <input 
        type="search"
        placeholder='What do you want to listen to?'
        className='   bg-black  p-1 w-[20%] rounded-full text-[0.8rem] pl-8 border-1 '
        />
      </div>
      <div>
        <div className="flex justify-between  mb-3 text-white mx-4 mt-4 ">
          <h1 className=" font-bold text-xl">
            Browes all
          </h1>
        </div>
        





        <div className=' w-full  grid gap-4  grid-cols-2 md:grid-cols-3 xl:grid-cols-7 p-5'>
          
       {Search.map(()=>(
         <div className='  relative grid gap-0 '>
         
         <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAQLoc-B6lyK7t1JouIQLfPtByCInlioOvA&usqp=CAU"
           className=" object-cover w-48 rounded-lg "
           alt=''
         />
         
         <div>
           <p className=' text-lg text-white absolute top-2 font-bold left-5'>Product</p>
         </div>
       </div>
       ))}
        

        </div>
         
      </div>
    </div>
  )
}

export default SearchPage

