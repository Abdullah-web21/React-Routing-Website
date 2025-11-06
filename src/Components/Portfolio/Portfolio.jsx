import React from "react"
import { Button } from "@mui/material"
import SlideInSection from "../../Slide"

export default function Card() {
  return (
    <>
      <div className="relative h-90 bg-[url('https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/3d-black-icosahedron-and-asymmetric-hexagonal-bipyramid-patterned-background.jpg')] bg-no-repeat bg-cover bg-right">
        <div className="absolute inset-0 bg-[#242426]/85"></div>

        <div className=" z-1 text-4xl text-white font-bold left-25 bottom-30 absolute">
          <p>PORTFOLIO</p>
          <p className="text-[20px] font-light mt-4">
            Thriving on coffee and living in our imaginations.
          </p>
        </div>

        <div className="absolute right-10 -bottom-20 z-1">
          <img
            src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/8_.png"
            alt=""
            className="w-64 h-auto"
          />
        </div>
      </div>
      <div className="flex justify-center gap-6 flex-row flex-wrap pt-40 pb-20 bg-black">
       
          <div className="flex justify-center ml-22 mr-18 mb-10   ">
            <div className="text-white text-3xl flex-1 font-bold">
              Our latest portfolio
              <div className="w-20 mt-10 h-0 border-2 border-blue-500"></div>
            </div>

            <div className="text-gray-400 flex-1">
              Ex sollicitudin montes aenean cubilia velit vehicula habitasse
              lacus lacinia morbi. Lacus pede aliquam sagittis tellus posuere
              nisl placerat. Volutpat mus odio placerat id mauris porta.
            </div>
          </div>
       

                                
        <SlideInSection direction="bottom">
        <div className="w-150 flex flex-col justify-center bg-[#323437] rounded-lg  relative">
          <div>
            <img
              src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
              alt="Baby Boo & Friends"
              className=" w-full"
            />
          </div>

          <div className="pt-2 pr-6 pb-6 pl-6 ">
            <h2 className="mt-4 text-white text-xl font-bold">
              Baby Boo &amp; Friends Movies
            </h2>
            <p className="mt-2 text-gray-400 text-sm leading-relaxed mb-8">
              In penatibus consequat ligula finibus etiam primis massa morbi
              hendrerit. Hendrerit phasellus parturient ante egestas aliquam
              nisi dictum amet suspendisse.
            </p>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#205cd4",
                color: "white",
                fontSize: "12px",
                lineHeight: "12px",
                fontWeight: "500",
                padding: "15px 25px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              MORE DETAIL
            </Button>
          </div>
        </div>
        </SlideInSection>
        <SlideInSection direction="bottom">
        <div className="w-150 flex flex-col justify-center bg-[#323437] rounded-lg  text-gray-300 shadow-lg relative">
          <div>
            <img
              src="https://images.pexels.com/photos/2582932/pexels-photo-2582932.jpeg"
              alt="Baby Boo & Friends"
              className=" w-full"
            />
          </div>

          <div className="pt-2 pr-6 pb-6 pl-6 ">
            <h2 className="mt-4 text-white text-xl font-bold">
              Maddog mini & Little mouse
            </h2>
            <p className="mt-2 text-gray-400 text-sm leading-relaxed mb-8">
              In penatibus consequat ligula finibus etiam primis massa morbi
              hendrerit. Hendrerit phasellus parturient ante egestas aliquam
              nisi dictum amet suspendisse.
            </p>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#205cd4",
                color: "white",
                fontSize: "12px",
                lineHeight: "12px",
                fontWeight: "500",
                padding: "15px 25px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              MORE DETAIL
            </Button>
          </div>
        </div>
        </SlideInSection>

        <SlideInSection direction="bottom">

        <div className="w-150 flex flex-col justify-center bg-[#323437] rounded-lg  text-gray-300 shadow-lg relative">
          <div>
            <img
              src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg"
              alt="Baby Boo & Friends"
              className=" w-full"
            />
          </div>

          <div className="pt-2 pr-6 pb-6 pl-6 ">
            <h2 className="mt-4 text-white text-xl font-bold">
              Makko advertising movie project
            </h2>
            <p className="mt-2 text-gray-400 text-sm mb-8 leading-relaxed">
              In penatibus consequat ligula finibus etiam primis massa morbi
              hendrerit. Hendrerit phasellus parturient ante egestas aliquam
              nisi dictum amet suspendisse.
            </p>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#205cd4",
                color: "white",
                fontSize: "12px",
                lineHeight: "12px",
                fontWeight: "500",
                padding: "15px 25px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              MORE DETAIL
            </Button>
          </div>
        </div>
        </SlideInSection>
        <SlideInSection direction="bottom">

        <div className="w-150 flex flex-col justify-center bg-[#323437] rounded-lg  text-gray-300 shadow-lg relative">
          <div>
            <img
              src="https://images.pexels.com/photos/8294625/pexels-photo-8294625.jpeg"
              alt="Baby Boo & Friends"
              className=" w-full"
            />
          </div>

          <div className="pt-2 pr-6 pb-6 pl-6 ">
            <h2 className="mt-4 text-white text-xl font-bold">
              American Ninja 2D short animations
            </h2>
            <p className="mt-2 text-gray-400 mb-8 text-sm leading-relaxed">
              In penatibus consequat ligula finibus etiam primis massa morbi
              hendrerit. Hendrerit phasellus parturient ante egestas aliquam
              nisi dictum amet suspendisse.
            </p>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#205cd4",
                color: "white",
                fontSize: "12px",
                lineHeight: "12px",
                fontWeight: "500",
                padding: "15px 25px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              MORE DETAIL
            </Button>
          </div>
        </div>
        </SlideInSection>
        <SlideInSection direction="bottom">

        <div className="w-150 flex flex-col justify-center bg-[#323437] rounded-lg  text-gray-300 shadow-lg relative">
          <div>
            <img
              src="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg"
              alt="Baby Boo & Friends"
              className=" w-full"
            />
          </div>

          <div className="pt-2 pr-6 pb-6 pl-6 ">
            <h2 className="mt-4 text-white text-xl font-bold">
              Lokamart Co. short movies for ads
            </h2>
            <p className="mt-2 text-gray-400 mb-8 text-sm leading-relaxed">
              In penatibus consequat ligula finibus etiam primis massa morbi
              hendrerit. Hendrerit phasellus parturient ante egestas aliquam
              nisi dictum amet suspendisse.
            </p>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#205cd4",
                color: "white",
                fontSize: "12px",
                lineHeight: "12px",
                fontWeight: "500",
                padding: "15px 25px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              MORE DETAIL
            </Button>
          </div>
        </div>
        </SlideInSection>
        <SlideInSection direction="bottom">
        <div className="w-150 flex flex-col justify-center bg-[#323437] rounded-lg  text-gray-300 shadow-lg relative">
          <div>
            <img
              src="https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg"
              alt="Baby Boo & Friends"
              className=" w-full"
            />
          </div>

          <div className="pt-2 pr-6 pb-6 pl-6 ">
            <h2 className="mt-4 text-white text-xl font-bold">
              Baby Boo & Friends II Movies
            </h2>
            <p className="mt-2 text-gray-400 text-sm mb-8 leading-relaxed">
              In penatibus consequat ligula finibus etiam primis massa morbi
              hendrerit. Hendrerit phasellus parturient ante egestas aliquam
              nisi dictum amet suspendisse.
            </p>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#205cd4",
                color: "white",
                fontSize: "12px",
                lineHeight: "12px",
                fontWeight: "500",
                padding: "15px 25px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              MORE DETAIL
            </Button>
          </div>
        </div>
        </SlideInSection>
      </div>
    </>
  );
}
