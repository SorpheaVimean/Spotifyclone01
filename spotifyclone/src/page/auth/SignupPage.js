import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import LoginPage from './LoginPage';
// import SpotifyLogo from './LoginPage/SpotifyLogo'
import { Select,Radio, Checkbox} from 'antd';

const SignupPage = () => {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-2 ">
        {/* <img src='SpotifyLogo'/> */}
        <img
          src="https://assets.stickpng.com/images/5ece4ff9123d6d0004ce5f89.png "
          className="w-36 mt-10 mb-10"
        />
        <h2 className=" text-center text-3xl font-bold leading-9 tracking-tight">
          Sign up for free to start listening.
        </h2>
       

        <div className="mt-10 flex flex-col items-center justify-center  text-md font-bold leading-9 tracking-tigh  ">
          <a className="flex items-center border-2 px-8 py-1 rounded-full bg-[#384f81] text-white hover:scale-105 mb-2 transition ease-in-out">
            <BiLogoFacebookCircle className=" text-2xl mr-12 text-white" />
            <p className=" mr-12">Sign up with Facebook</p>
          </a>
          <a className="flex items-center border-2 px-8 py-1 rounded-full border-black hover:scale-105  mb-2 transition ease-in-out">
            <FcGoogle className=" text-2xl mr-16 " />
            <p className=" mr-12">Sign up with Google</p>
          </a>
        </div>
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <span class="absolute px-4 font-medium text-black -translate-x-1/2 left-1/2 bg-white">
            or
          </span>
        </div>
        <h2 className=" text-center text-xl font-bold leading-9 tracking-tight my-1">
          Sign up for free to start listening.
        </h2>
        <form class="w-full p-5  ">
          <label for="email" class="mb-8 w-full flex flex-col">
            <span className='mb-1'>What's your email?</span>
            <input
              type="email"
              name="email"
              id="email"
              class="... peer"
              placeholder="Enter your email."
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className=" p-3 py-2 ring-1 ring-inset ring-black rounded-s"
            />
            <span class="mt-2  hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Please enter a valid email address
            </span>
          </label>
          <label for="email" class="mb-8 w-full flex flex-col">
            <span className='mb-1'>Create a password</span>
            <input
              type="email"
              name="email"
              id="email"
              class="... peer"
              placeholder=" Create a password"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className=" p-3 py-2 ring-1 ring-inset ring-black rounded-s"
            />
            <span class="mt-2  hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Please enter a valid email address
            </span>
          </label>
          <label for="email" class="mb-5 w-full flex flex-col">
            <span className='mb-1'>What should we call you?</span>
            <input
              type="email"
              name="email"
              id="email"
              class="... peer"
              placeholder=" Enter profile name."
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="p-3 py-2 ring-1 ring-inset ring-black rounded-s"
            />
            <span class="mt-2  hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Please enter a valid email address
            </span>
          </label>
        </form>
        <div className='w-[90%]'>
          <p>What's your date of birth?</p>
          <div className="flex justify-between items-center">
            <div className=''>
              <p>Day</p>
              <input
                placeholder="DD"
                className="p-2 w-20 py-2 ring-1 ring-inset ring-black rounded-s"
              />
            </div>
            <div className='px-10'>
              <p>Day</p>
              <Select
                defaultValue="Month"
                style={{ width: 150}}
                onChange={handleChange}
                options={[
                  {
                    label: "Month",
                    options: [
                     
                      { label: "January", value: "January" },
                      { label: "February", value: "February" },
                      { label: "March", value: "March" },
                      { label: "April", value: "April" },
                      { label: "May", value: "May" },
                      { label: "June", value: "June" },
                      { label: "July", value: "July" },
                      { label: "August", value: "August" },
                      { label: "September", value: "September" },
                      { label: "October", value: "October" },
                      { label: "November", value: "November" },
                      { label: "December", value: "December" },
                    ],
                  },
                ]}
              />
            </div>
            <div className="">
              <p>Year</p>
              <input
                placeholder="YYYY"
                className=" w-20 py-2 ring-1 ring-inset ring-black rounded-s"
              />
            </div>
          </div>
        </div>
        <div className='pl-7 mt-8'>
          <p>What's your gender?</p>
          <div className='mt-4'>
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Female</Radio>
            <Radio value={3}>Non-binary</Radio>
            <Radio value={4}>Other</Radio>
            
            <Radio value={5}>Prefer not to say</Radio>
          </Radio.Group>
          </div>
        </div>
        
      </div>
      <div className='flex justify-center  flex-col items-start pl-7 gap-5 mt-5 '>
          <Checkbox value="A" className='text-sm'>Please send me news and offers from Spotify</Checkbox>
          <Checkbox value="A" className='text-sm'>Share my registration data with Spotify's content providers for marketing purposes.</Checkbox>
      </div>
      <p className=' text-xs p-7'>By clicking on sign-up, you agree to the <a href='#' className='text-green-600 hover:text-green-500 underline'>Spotify Terms and Conditions</a> and <a href='#' className='text-green-600 hover:text-green-500 underline'>Privacy Policy.</a> </p>
      <div className='flex justify-center'>
                <button
                  type="submit"
                  className=" font-bold flex w-44 justify-center rounded-full bg-[#1fdf64] px-3 py-5 text-sm  leading-6 text-black shadow-sm hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out"
                >
                  Log In
                </button>
              </div>
              <p className="mt-10 text-center text-sm mb-36 ">
               Have an account?{" "}
              
              <a
                href="LoginPage"
                className="font-semibold leading-6 text-green-400 hover:text-green-300  underline"
              >
                Log in.
              </a>
            </p>
    </div>
  );
}

export default SignupPage
