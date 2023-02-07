import React from "react";
import Image from "next/image";
import fullBody from "../Images/fullBody.png";
import best1 from "../Images/Group 3854.png";
import best2 from "../Images/best2.png";
import healthy1 from "../Images/healthy1.png";
import daily from "../Images/image 76.png";
import bodyLogo from "../Images/bodyLogo.png";

import { AiFillPlayCircle, AiOutlineArrowRight } from "react-icons/ai";

const Body = () => {
  return (
    <div className="m-[8%] background">

      <div class="grid lg:grid-cols-2  gap-4   ">
        <div className="relative mt-20 md:mt-0 order-2 md:order-1">
          <div className="ml-[27%] ">
            <Image src={fullBody} width={358} height={700} />
          </div>
          <div className="absolute left-[34%] top-[5%] w-12 h-16">
            <Image src={best1} />
          </div>

          <div className="absolute right-[15%] top-[40%] w-12 h-16 ">
            <Image src={best2} />
          </div>
          <div className="flex absolute bottom-10 left-[12%]  bg-white h-20 w-52 rounded-xl">
            <div className="w-14 h-16 mt-3 ml-2">
              <Image src={bodyLogo} />
            </div>
            <div className="mt-4 ml-6">
              <h2 className="font-black text-base">800 kall</h2>
              <p className="opacity-50 text-xs">Burn fat</p>
            </div>
          </div>
        </div>
        <div className="w-[550px] mt-[4%] order-1 md:order2 ">
          <h1 className="text-5xl leading-[73px] font-bold tracking-[0.01em]">
            Best full body <br /> workout to lose fat
          </h1>
          <p className="text-lg font-normal leading-7 tracking-[0.01em] w-auto height={580} mt-5">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.
          </p>
          <div className="grid grid-cols-2 bg-[#264373] text-white mt-[5%] w-[45%] h-12 rounded-md">
            <button className="">Get started </button>
            <div className="ml-[50%] mt-3">
              <AiOutlineArrowRight height={20} />
            </div>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-2  gap-4 mt-[8%]  ">
        <div className="w-[550px] mt-[4%]  ">
          <h1 className="text-5xl leading-[73px] font-semibold tracking-[0.01em]">
            Daily morning <br /> workout in home
          </h1>
          <p className="text-lg font-normal leading-7 tracking-[0.01em] w-auto height={580} mt-5">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.
          </p>
          <div className="grid grid-cols-2 bg-[#264373] text-white mt-[5%] w-[45%] h-12 rounded-md">
            <button className="">Get started </button>
            <div className="ml-[50%] mt-3">
              <AiOutlineArrowRight height={20} />
            </div>
          </div>
        </div>

        <div>
          <div className="relative mt-20 md:mt-0 ">
            <div className="ml-[27%] ">
              <Image src={daily} width={358} height={700} />
            </div>
            <div className="flex absolute top-[8%] left-[15%]  bg-white h-20 w-52 rounded-xl">
              <div className="w-16 h-16 mt-3 ml-2">
                <Image src={best2} />
              </div>
              <div className="mt-4 ml-4">
                <h2 className="font-black text-base">Stretch</h2>
                <p className="opacity-50 text-xs">Your body</p>
              </div>
            </div>
            <div className="absolute left-[22%] top-[55%] w-14 h-16">
              <Image src={best1} />
            </div>

            <div className="absolute right-[22%] top-[25%] w-14 h-16 ">
              <Image src={bodyLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
