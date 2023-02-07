import React from "react";
import Image from "next/image";
import { AiFillPlayCircle, AiOutlineArrowRight } from "react-icons/ai";
import works from "../Images/works.png";
import circle from "../Images/CheckCircle.png";
import best1 from "../Images/Group 3868.png";
import best2 from "../Images/Group 3856.png";
import best3 from "../Images/Group 3854.png";
import program1 from "../Images/program1.png";
import program2 from "../Images/program2.png";
import program3 from "../Images/program3.png";
import program4 from "../Images/program4.png";
import program5 from "../Images/program5.png";
import program6 from "../Images/program6.png";
import rectangle from '../Images/Rectangle 259.png'

const Works = () => {
  return (
    <div className="m-[8%]">
      {/* how it works */}
      <section class="grid lg:grid-cols-2  gap-20 mt-[8%]  ">
        <div className="order-2 md:order-1 ">
          <div className="relative  ">
            <div className="ml-[10%] ">
              <Image src={works} width={450} />
            </div>
            <div className="absolute left-[75%] sm:left-[58%] top-[-15%] w-[25%] h-16 ">
              <Image src={best1} />
            </div>
            <div className="absolute left-[18%] top-[-3%] w-16 h-16 ">
              <Image src={best2} />
            </div>
            <div className="absolute right-[3%]  bottom-[17%] w-[25%] h-16 ">
              <Image src={best3} />
            </div>
            <div className="flex absolute bottom-[8%] left-[5%]  bg-white h-14 w-52 rounded-xl">
              <div className="w-16 h-16 mt-3 ml-5">
                <Image src={circle} />
              </div>
              <div className="mt-4 ml-4">
                <h2 className="font-black text-base">100% Trusted</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 mt-[15%]  md:order-2 w-[550px] md:mt-[4%]  ">
          <h1 className="text-5xl leading-[73px] font-semibold tracking-[0.01em] mt-[-10%]">
            How It Works?
          </h1>

          <p className="bg-white  h-[25%] rounded-xl mt-5 p-7 text-lg text-center shadow-lg shadow-lg shadow-white-500/50 ">
            The body becomes sick because of rarely exercise
          </p>
          <p className="bg-white  h-[25%] rounded-xl mt-5 p-7 text-lg text-center shadow-lg shadow-lg shadow-white-500/50 opacity-40">
            The body becomes sick because of rarely exercise
          </p>
          <p className="bg-white  h-[25%] rounded-xl mt-5 p-7 text-lg text-center shadow-lg shadow-lg shadow-white-500/50 opacity-40">
            The body becomes sick because of rarely exercise
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="m-[8%]">
        <h1 className=" w-[550px] md:w-full  text-7xl  md:text-5xl  font-medium text-center ">
          Programs that can  be taken
        </h1>
        <div class="grid  gap-4 sm:grid-cols-1 md:grid-cols-3 mt-20">
          <div class="grid grid-cols-2 gap-30">
            <div className="w-24 md:w-14  md:ml-20">
              <Image src={program1} />
            </div>
            <div className="">
              <h2 className="font-black w-max text-2xl md:text-base">Gets ABS in 2 weeks</h2>
              <p className="opacity-50 text-base md:text-xs w-max md:w-[60%]">
                Exercise is a very important need for our body.{" "}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-30">
            <div className="w-24 md:w-14  md:ml-20">
              <Image src={program2} />
            </div>
            <div className="">
              <h2 className="font-black text-2xl w-max md:text-base">Gets ABS in 2 weeks</h2>
              <p className="opacity-50 text-base md:text-xs w-max md:w-[60%]">
                Exercise is a very important need for our body.{" "}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-30">
            <div className="w-24 md:w-14  md:ml-20">
              <Image src={program3} />
            </div>
            <div className="">
              <h2 className="font-black text-2xl w-max md:text-base">Gets ABS in 2 weeks</h2>
              <p className="opacity-50 text-base md:text-xs w-max md:w-[60%]">
                Exercise is a very important need for our body.{" "}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-30">
            <div className="w-24 md:w-14  md:ml-20">
              <Image src={program4} />
            </div>
            <div className="">
              <h2 className="font-black text-2xl w-max md:text-base">Gets ABS in 2 weeks</h2>
              <p className="opacity-50 text-base md:text-xs w-max md:w-[60%]">
                Exercise is a very important need for our body.{" "}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-30">
            <div className=" md:w-14  md:ml-20">
              <Image src={program5} />
            </div>
            <div className="">
              <h2 className="font-black text-2xl w-max md:text-base">Gets ABS in 2 weeks</h2>
              <p className="opacity-50 text-base md:text-xs w-max md:w-[60%]">
                Exercise is a very important need for our body.{" "}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-30">
            <div className="w-28 md:w-20  md:ml-16">
              <Image src={program6} />
            </div>
            <div className="">
              <h2 className="font-black text-2xl w-max md:text-base">Gets ABS in 2 weeks</h2>
              <p className="opacity-50 text-base md:text-xs w-max md:w-[60%]">
                Exercise is a very important need for our body.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="m-[8%]">
      <h1 className="text-7xl md:text-5xl font-medium text-center">
          Testimonials
        </h1>
        <div class="grid grid-cols-1 gap-4  md:grid-cols-2 mt-20 ">
          <div class="p-4 bg-white h-auto w-[200%] md:w-[100%] rounded-xl ">
            <p className="text-base p-10">
              <span className="text-5xl opacity-50">"</span> It's great to be able to work out from home and be helped by the
              gymbaran. My day feels fresher when I regularly participate in
              this fun sport. Good luck to the coaches.
            </p>
            <div class="grid grid-cols-2 ">
            <div className="w-14 ml-[40%]">
              <Image src={rectangle} />
            </div>
            <div >
              <h2 className="font-black text-base">Suketi Mantape</h2>
              <p className="opacity-50 text-xs w-[60%]">
                Designer Graphic{" "}
              </p>
            </div>
          </div>
          </div>

          <div class="p-4 bg-white h-auto w-[200%] md:w-[100%] rounded-xl">
          <p className="text-base p-10">
              <span className="text-5xl opacity-50">"</span> It's great to be able to work out from home and be helped by the
              gymbaran. My day feels fresher when I regularly participate in
              this fun sport. Good luck to the coaches.
            </p>
            <div class="grid grid-cols-2 ">
            <div className="w-14 ml-[40%]">
              <Image src={rectangle} />
            </div>
            <div >
              <h2 className="font-black text-base">Ada Apose</h2>
              <p className="opacity-50 text-xs w-[60%]">
                Designer Graphic{" "}
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
