import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";

import { Drawer } from "antd";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [changeNav, setChangeNave] = useState(window.innerWidth < 960);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setChangeNave(window.innerWidth < 960);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {changeNav ? (
        <div className=" w-full relative z-10 h-full overflow-x-hidden">
          <div className=" w-full h-20  bg-black text-white flex  items-center  justify-between ">
            <div className="flex items-center">
              <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
                className=" w-28 ml-2 "
                alt=""
              />
            </div>
            <BiSearchAlt2 className=" ml-2 text-2xl" />

            <button
              className={` text-black bg-white px-8 py-2 rounded-3xl font-bold hover:scale-105 transition duration-200 ease-in-out `}
            >
              Open App
            </button>

            <AiOutlineMenu className="text-2xl mr-4 " onClick={showDrawer} />
          </div>
        </div>
      ) : (
        <div className=" flex justify-between items-center h-16 w-full bg-[#121212] text-White   ">
          <div className=" text-4xl flex ml-4 justify-between w-auto">
            <div className="flex">
              <MdKeyboardArrowLeft
                className="mr-4 bg-slate-950 rounded-full p-1"
                onClick={() => navigate(-1)}
              />
              <MdKeyboardArrowRight
                className=" bg-slate-950 rounded-full p-1"
                onClick={() => navigate(1)}
              />
            </div>
          </div>
          <div className="mr-16 text-xl  z-20">
            <Link to={"SignupPage"}>
              <button className=" text-lg text-slate-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out">
                Sign up
              </button>
            </Link>
            <Link to={"LoginPage"}>
              <button className="ml-20 text-black bg-white px-8 py-2 rounded-3xl font-bold hover:scale-105 transition duration-200 ease-in-out">
                Log in
              </button>
            </Link>
          </div>
        </div>
      )}

      <Drawer
        onClose={onClose}
        open={open}
        style={{ background: "black", color: "white" }}
      >
        <div style={{ padding: 0, margin: 0 }}>
          <div className="flex  justify-end mr-5 pt-5 text-2xl ">
            <AiOutlineClose
              className=" hover:scale-110 transition duration-200 ease-in-out "
              onClick={onClose}
            />
          </div>
          <div className={`flex flex-col gap-5 text-2xl pl-6 font-bold w-fit `}>
            <Link
              to={"LoginPage"}
              className=" hover:scale-110 transition duration-200 ease-in-out "
            >
              Log in
            </Link>
            <Link
              to={"SignupPage"}
              className=" hover:scale-110 transition duration-200 ease-in-out "
            >
              Sign up
            </Link>
            <hr className="w-10" />
            <a
              href="https://www.spotify.com/kh/premium/?ref=mweb_loggedout_premium_menu"
              className=" hover:scale-110 transition duration-200 ease-in-out "
            >
              Premium
            </a>
            <a
              href="https://support.spotify.com/kh/"
              className=" hover:scale-110 transition duration-200 ease-in-out "
            >
              Help
            </a>
            <a
              href="https://www.spotify.com/kh/download/windows/?referrer=mwp"
              className=" hover:scale-110 transition duration-200 ease-in-out "
            >
              Download
            </a>
            <a
              href="https://www.spotify.com/kh/legal/privacy-policy/"
              className=" hover:scale-110 transition duration-200 ease-in-out "
            >
              Privacy
            </a>
            <a
              href="https://www.spotify.com/kh/legal/end-user-agreement/"
              className=" hover:scale-110 transition duration-200 ease-in-out "
            >
              Terms
            </a>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
