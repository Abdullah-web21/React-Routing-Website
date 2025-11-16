import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import SlideInSection from "../../Slide";

export default function Team() {

  return (
    <>
      <div className="relative h-90 bg-[url('https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/3d-black-icosahedron-and-asymmetric-hexagonal-bipyramid-patterned-background.jpg')] bg-no-repeat bg-cover bg-right">
        <div className="absolute inset-0 bg-[#242426]/85"></div>

        <div className="  text-4xl text-white font-bold left-25 bottom-30 absolute">
          <p>TEAM</p>
          <p className="text-[20px] font-light mt-4">
            It takes two flints to make a fire.
          </p>
        </div>

        <div className="absolute right-20 -bottom-20 z-1">
          <img
            src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/6_.png"
            alt=""
            className="w-70 h-auto"
          />
        </div>
      </div>

      <div className="bg-[#1c1c1c] bg-no-repeat bg-cover bg pt-21 pb-20">
        <SlideInSection direction="bottom">
          <div>
            <div className="flex justify-center ">
              <div className="text-center flex flex-col gap-4 max-w-170">
                <p className="text-white text-3xl font-semibold">
                  Meet our team
                </p>
                <p className="text-gray-400 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-20  gap-5 flex-wrap ">
              <div className="block max-w-[20%] text-center relative bg-blue-500 rounded-[10px]  pb-5">
                <div>
                  <img
                    src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/img__0004_Layer-4.jpg"
                    alt=""
                    className=" rounded-t-[10px]"
                  />
                </div>
                <p className=" text-[20px] text-white mt-5">Arthur Lawrence</p>
                <p className="text-white text-[14px]">Founder</p>
              </div>

              <div className="block max-w-[20%] text-center relative bg-blue-500 rounded-[10px]  pb-5">
                <div>
                  <img
                    src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/img__0007_Layer-1.jpg"
                    alt=""
                    className=" rounded-t-[10px]"
                  />
                </div>
                <p className=" text-[20px] text-white mt-5">Matthew Doyle</p>
                <p className="text-white text-[14px]">Co-Founder</p>
              </div>

              <div className="block max-w-[20%] text-center relative bg-blue-500 rounded-[10px]  pb-5">
                <div>
                  <img
                    src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/img__0006_Layer-2.jpg"
                    alt=""
                    className=" rounded-t-[10px]"
                  />
                </div>
                <p className=" text-[20px] text-white mt-5">Willow Holland</p>
                <p className="text-white text-[14px]">Business Manager</p>
              </div>

              <div className="block max-w-[20%] text-center relative bg-blue-500 rounded-[10px]  ">
                <div>
                  <img
                    src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/img__0002_Layer-6.jpg"
                    alt=""
                    className=" rounded-t-[10px]"
                  />
                </div>
                <p className=" text-[20px] text-white mt-5">Sofia Fisher</p>
                <p className="text-white text-[14px]">Project Manager</p>
              </div>

              <div className="block max-w-[20%] text-center relative bg-blue-500 rounded-[10px]  pb-5">
                <div>
                  <img
                    src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/img__0005_Layer-3.jpg"
                    alt=""
                    className=" rounded-t-[10px]"
                  />
                </div>
                <p className=" text-[20px] text-white mt-5">Nathan Williams</p>
                <p className="text-white text-[14px]">3D Artist</p>
              </div>

              <div className="block max-w-[20%] text-center relative bg-blue-500 rounded-[10px]  ">
                <div>
                  <img
                    src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/img__0003_Layer-5.jpg"
                    alt=""
                    className=" rounded-t-[10px]"
                  />
                </div>
                <p className=" text-[20px] text-white mt-5">Gracie Hawkins</p>
                <p className="text-white text-[14px]">3D Artist</p>
              </div>

              <div className="block max-w-[20%] text-center relative bg-blue-500 rounded-[10px]  pb-5">
                <div>
                  <img
                    src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/img__0001_Layer-7.jpg"
                    alt=""
                    className=" rounded-t-[10px]"
                  />
                </div>
                <p className=" text-[20px] text-white mt-5">Rachel Farrell</p>
                <p className="text-white text-[14px]">3D Artist</p>
              </div>

              <div className="block max-w-[20%] text-center relative bg-blue-500 rounded-[10px]  pb-5">
                <div>
                  <img
                    src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/img__0000_Layer-8.jpg"
                    alt=""
                    className=" rounded-t-[10px]"
                  />
                </div>
                <p className=" text-[20px] text-white mt-5">Harrison Edwards</p>
                <p className="text-white text-[14px]">Sales Manager</p>
              </div>
            </div>
          </div>
        </SlideInSection>
      </div>
    </>
  );
}
