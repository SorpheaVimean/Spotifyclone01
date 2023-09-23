import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {AiFillApple, AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Switch } from 'antd';
import {  Form, Input } from 'antd';
import SignupPage from './SignupPage';



const LoginPage = () => {

 const [showPass, setShowPass]= useState(false);
const ShowPasswords = () =>{
  setShowPass(!showPass);
}
  return (
    
    
    <div className=" bg-gradient-to-b from-slate-800 to-black  h-full flex flex-col   items-center">
      <div className=" w-full h-28  bg-black text-white flex  items-center  " >
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" 
          className=" w-36 ml-20 "
          alt=""
        />
      </div>
      <div className="flex justify-center items-center xl:mt-20 sm:mt-0 bg-black xl:w-[40%] sm:w-full xs:w-full md:w[40%]  xl:rounded-xl sm:rounded-none">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-slate-200">
              Log in to Spotify
            </h2>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center  text-md font-bold leading-9 tracking-tigh text-gray-300">
            <a className="flex items-center border-2 px-8 py-1 rounded-full border-slate-400 hover:border-white mb-2">
              <FcGoogle className=" text-2xl mr-16 " />
              <p className=" mr-12">Continue with Google</p>
            </a>
            <a className="flex items-center border-2 px-8 py-1 rounded-full border-slate-400 hover:border-white mb-2">
              <BiLogoFacebookCircle className=" text-2xl mr-12 text-[#1877f2]" />
              <p className=" mr-12">Continue with Facebook</p>
            </a>
            <a className="flex items-center border-2 px-8 py-1 rounded-full border-slate-400 hover:border-white">
              <AiFillApple className=" text-2xl mr-16" />
              <p className=" mr-12">Continue with Apple</p>
            </a>
          </div>
          <hr className=" flex justify-center mt-14 text-gray-700 border-slate-600" />
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-medium leading-6 "
                >
                  Email or username
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email or username"
                    required
                    className=" p-3 block w-full rounded-md border-0 py-1.5 bg-[#1e1e1e] text-white shadow-sm ring-1 ring-inset hover:ring-white  placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 "
                  />
                </div>
              </div>

              <div>               
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={ (showPass === false) ? "password" : "text" }
                    autoComplete="current-password"
                    placeholder="Password"
                    required
                    className=" p-3 block w-full rounded-md border-0 py-1.5 bg-[#1e1e1e] text-white shadow-sm ring-1 ring-inset hover:ring-white  placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 "
                  />
                  <div className='text-white text-xl absolute top-2 right-3'>
                    {
                      (showPass === false) ? <AiOutlineEyeInvisible onClick={ShowPasswords} /> : <AiOutlineEye  onClick={ShowPasswords} />
                    }
                  
                  
                  </div>
                </div>
               
              </div>
              <div className="flex items-center">
                <Switch size="small" defaultChecked className="mr-5" />
                <p className=" text-white">Remember me</p>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-full bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out"
                >
                  Log In
                </button>
              </div>
              <a
                href="#"
                className="flex justify-center text-white underline hover:text-green-300"
              >
                Forgot password?
              </a>
            </form>
            <hr className=" flex justify-center mt-14 text-gray-700 border-slate-600" />

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href="SignupPage"
                className="font-semibold leading-6 text-white hover:text-green-400 underline cursor-pointer"
              >
                Sign up for Spotify
              </a>
            </p>
          </div>
        </div>
      </div>
      <footer className=" my-16">
        <p className="text-slate-400">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#" className=" underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className=" underline">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </footer>
    </div>
  );
}

export default LoginPage
