import React from "react";
import Image from "next/image";
import homeImg from "../Images/body.png";
import arrow from "../Images/Vector.png";
import play from "../Images/play.png";
import pic1 from "../Images/Picture1.png";
import pic2 from "../Images/Picture2.png";
import pic3 from "../Images/Picture3.png";
import round from "../Images/Ellipse 142.png";
import brand1 from "../Images/Mask Group.png";
import brand2 from "../Images/Mask Group (1).png";
import brand3 from "../Images/Mask Group (2).png";
import brand4 from "../Images/Mask Group (3).png";
import { AiFillPlayCircle } from "react-icons/ai";

const Main = () => {
  return (
    <div className="m-[8%]">
      <div class="grid lg:grid-cols-2  gap-4   ">
        <div className="w-[550px] mt-20 ml-16">
          <h1 className="text-6xl leading-[73px] font-semibold font-mono tracking-[0.01em]">
            Healthy in side <br /> <a className="text-[#8382EB]">fresh</a> out
            side
          </h1>
          <p className="text-lg font-normal leading-7 tracking-[0.01em]  w-auto height={580} mt-5">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine.
          </p>
          <div>
            <div className="grid grid-cols-2 mt-8">
              <div className="grid grid-cols-2 bg-[#264373] text-white w-[70%] h-12 rounded-md">
                <button className="">Get started </button>
                <div className="ml-[50%] mt-3">
                  <Image src={arrow} height={20} />
                </div>
              </div>
              <div className="grid grid-cols-2 bg-white text-white w-[60%] h-12 rounded-md">
                <div className="ml-[20%] mt-3 text-[#264373] text-2xl ">
                  <AiFillPlayCircle />
                </div>
                <button className="ml-[-40%] text-[#264373]">Learn more</button>
              </div>
            </div>
          </div>
          <div className="mt-5 text-xl ">
            <h1 className="opacity-80 font-semibold">Brands:</h1>
            <div class="flex flex-row gap-8 mt-5">
              <div>
                <Image src={brand1} />
              </div>
              <div className="mt-[-1%]">
                <Image src={brand2} />
              </div>
              <div className="mt-[-3%]">
                <Image src={brand3} />
              </div>
              <div>
                <Image src={brand4} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative  ">
            <div className="ml-[27%] ">
              <Image src={homeImg} width={420} height={75} />
            </div>
            <div className="flex absolute top-[13%] left-[23%]  bg-white h-18 w-44 rounded-xl">
              <div className="w-16 h-16 mt-3 ml-2">
                <Image src={pic1} />
              </div>
              <div className="mt-4 ml-4">
                <h2 className="font-black text-base">150+</h2>
                <p className="opacity-50 text-xs">Members</p>
              </div>
            </div>
            <div className="absolute left-[80%] top-[16%] w-16 h-16">
              <Image src={pic2} />
            </div>
            <div className="absolute left-20 bottom-[20%] w-44 h-20">
              <Image src={pic3} />
            </div>
            <div className="absolute right-[2%] bottom-[10%] w-48 h-36 bg-white rounded-lg ">
              <div className="ml-[30%] mt-[10%]">
                <Image src={round} height={66} width={66} />
              </div>{" "}
              <h2 className="font-black text-base text-center mt-2">
                Zaqky Simorang
              </h2>
              <p className="opacity-50 text-xs text-center">Trainer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
