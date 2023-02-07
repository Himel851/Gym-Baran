import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillPlayCircle,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 ">
        <Link href="/">
          <div className="flex Sporting Grotesque ">
            <h1 className="mt-1 p-1 bg-[#6765F0] font-normal text-xl w-16 h-8 rounded-[10px] text-white text-center">
              Gym
            </h1>
            <h1 className="p-2 font-normal text-xl">baran</h1>
          </div>
        </Link>
        <ul className="hidden sm:flex ">
          <li className="p-4">
            <Link href="/home">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/program">Program</Link>
          </li>
          <li className="p-4">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="p-4">
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="mt-2 p-2 bg-[#264373] rounded-[10px] w-28  h-10 text-center ">
            <Link href="/log-in">
              <button className=" text-white">Log In</button>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10 text-black">
          {nav ? (
            <AiOutlineClose className="text-white" size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#443838] text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white hover:text-gray-500"
            >
              <Link href="/program">Program</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white hover:text-gray-500"
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white hover:text-gray-500"
            >
              <Link href="/about-us">About Us</Link>
            </li>
            <li
              onClick={handleNav}
              className="mt-2 p-2 ml-8 bg-[#264373] rounded-[10px] w-28  h-10 text-center "
            >
              <Link href="/log-in">
                <button className=" text-white">Log In</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
