import React from "react";
import Image from "next/image";
import img1 from "../Images/healthy1.png";
import img2 from "../Images/healthy2.png";
import img3 from "../Images/healthy3.png";
import sign from "../Images/sign.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Healthy = () => {
  return (
    <div>
      <div className="m-[8%] mt-[-6%]">
        <div class="w-full   ">
          <div class="grid lg:grid-cols-2">
            <div className="w-[550px] mt-20 ml-16">
              <h1 className="text-6xl leading-[73px] font-normal font-mono tracking-[0.01em]">
                Healthy in side <br /> fresh out side
              </h1>
            </div>
            <div className="w-[550px] mt-20 ml-16">
              <p className="text-lg font-normal leading-7 tracking-[0.01em]  w-auto height={580}">
                Exercise is a very important need for our body. Health and
                fitness will be obtained if you can do regular exercise and run
                a healthy routine. Even at home we still have to be diligent in
                exercising, either alone or with your friends at home. Healthy
                life makes you more excited to live the day
              </p>
            </div>
          </div>
          {/* <div className="grid lg:grid-cols-2   gap-4 mt-20 text-center justify-center">
          <h1 className="text-6xl leading-[73px] w-50% font-semibold tracking-[0.01em] font-mono">
            Healthy in side <br /> fresh out side
          </h1>
          <p className="text-lg font-normal leading-7 tracking-[0.01em] w-[80%] font-mono  height={580} mt-5 sm:ml-[10px]">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home. Healthy life makes you
            more excited to live the day
          </p>
        </div> */}
        </div>
      </div>

      <div className="ml-[10%]  mt-[7%]">
        <div className="w-[190%]  bg-[#6462F0]  md:w-[90%] md:m-0 rounded-xl ">
          <div className="grid  sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-3   ">
            <div className=" ml-[20%] mt-[10%] rounded-sm">
              <div className="grid grid-cols-2 ">
                <div className="w-24 h-24">
                  <Image src={img1} />
                </div>
                <div className="text-white ml-[-10%]">
                  <h2 className="font-extrabold">
                    Get that 11 line <br /> in 30 days
                  </h2>
                  <div className="grid grid-cols-2 mt-4 opacity-50">
                    <p className=" text-xs ">Learn more</p>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className=" ml-[20%] mt-[10%] rounded-sm">
              <div className="grid grid-cols-2 ">
                <div className="w-24 h-24">
                  <Image src={img2} />
                </div>
                <div className="text-white ml-[-10%]">
                  <h2 className="font-extrabold">
                    14 Days <br /> sherd challenge
                  </h2>
                  <div className="grid grid-cols-2 mt-4 opacity-50">
                    <p className=" text-xs ">Learn more</p>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="  ml-[20%] mt-[10%] mb-10 rounded-sm">
              <div className="grid grid-cols-2  ">
                <div className="w-24 h-24">
                  <Image src={img3} />
                </div>
                <div className="text-white ml-[-10%]">
                  <h2 className="font-extrabold">
                    Get flat belly <br /> in 30 days
                  </h2>
                  <div className="grid grid-cols-2 mt-4 opacity-50">
                    <p className=" text-xs ">Learn more</p>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthy;
