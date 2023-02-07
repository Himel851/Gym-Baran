import Image from "next/image";
import React from "react";
import footerLogo from "../Images/footerLogo.png";

const Footer = () => {
  return (
    <div>
      <footer class="grid grid-cols-1 w-[200%] md:w-[100%]  gap-4  sm:grid-cols-2 md:grid-cols-2 text-white bg-[#1C3764]">
        <div class="p-10 ml-[30%] md:ml-20 mt-[8%]">
          <div className="flex Sporting Grotesque ">
            <h1 className="mt-1 p-1 text-[#6765F0] bg-white font-normal text-xl w-16 h-8 rounded-[10px] text-center">
              Gym
            </h1>
            <h1 className="p-2 font-normal text-xl">baran</h1>
          </div>
          <h1 className="opacity-60 text-lg p-2 mt-3">
            We take care of your health with <br /> regular and fun exercise
          </h1>
          <div class="flex flex-row gap-4">
            <Image src={footerLogo} width={28} className="gap-5" />
            <Image src={footerLogo} width={28} className="gap-5" />
            <Image src={footerLogo} width={28} className="gap-5" />
            <Image src={footerLogo} width={28} className="gap-5" />
            <Image src={footerLogo} width={28} className="gap-5" />
          </div>
        </div>
        <div class="mt-[10%]">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3 text-center">
            <div class="p-4">
              <h1 className="text-xl">Program</h1>
              <h1 className="text-xl opacity-60">Workout</h1>
              <h1 className="text-xl opacity-60">Gym</h1>
              <h1 className="text-xl opacity-60">Cardio</h1>
              <h1 className="text-xl opacity-60">Zumba</h1>
            </div>
            <div class="p-4">
              <h1 className="text-xl">Blog</h1>
              <h1 className="text-xl opacity-60">Daily stretch</h1>
              <h1 className="text-xl opacity-60">Daily workout</h1>
            </div>
            <div class="p-4">
              <h1 className="text-xl">About Us</h1>
              <h1 className="text-xl opacity-60">Support</h1>
              <h1 className="text-xl opacity-60">Contact</h1>
              <h1 className="text-xl opacity-60">Address</h1>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default Footer;
