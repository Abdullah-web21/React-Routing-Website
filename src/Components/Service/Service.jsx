import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import SlideInSection from "../../Slide";

export default function Service() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="relative h-90 bg-[url('https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/3d-black-icosahedron-and-asymmetric-hexagonal-bipyramid-patterned-background.jpg')] bg-no-repeat bg-cover bg-right">
        <div className="absolute inset-0 bg-[#242426]/85"></div>

        <div className="  text-4xl text-white font-bold left-25 bottom-30 absolute">
          <p>SERVICES</p>
          <p className="text-[20px] font-light mt-4">
            We Don't Make Animation. We Make Animation Better.
          </p>
        </div>

        <div className="absolute right-20 -bottom-20 z-1">
          <img
            src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/7_.png"
            alt=""
            className="w-75 h-auto"
          />
        </div>
      </div>

      <section className="bg-[#1c1c1c] text-white py-30  px-20 flex flex-row items-center  relative ">
        <SlideInSection direction="bottom">
          <div className="flex align-middle h-auto  gap-20">
            <div className="w-2/3 flex justify-center z-1">
              <img
                src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/e-sports-gamer-skilfully-plays-3d-shooter-mock-up-video-game.jpg"
                alt="Designer working at computer"
                className="rounded-lg shadow-lg w-full "
              />
            </div>

            <div className="w-1/2 flex flex-col justify-center space-y-6 z-2">
              <h3 className="text-blue-400 uppercase tracking-wide text-sm font-semibold">
                Our Services
              </h3>
              <h2 className="text-3xl font-medium ">
                Where imagination meets reality, using creativity.
              </h2>
              <p className="text-gray-400 ">
                Metus placerat pretium nisl per porttitor suscipit aliquet massa
                ac ex bibendum. Sagittis leo quis mauris mi mollis porta vel
                dolor. Diam semper penatibus nibh massa magnis nisi commodo
                mattis.
              </p>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#205cd4",
                  color: "white",
                  fontSize: "12px",
                  lineHeight: "12px",
                  fontWeight: "500",
                  width: "35%",
                  padding: "15px 25px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                DISCOVER MORE
              </Button>
            </div>
            <div className="mb-4 absolute top-25 right-15">
              <img
                src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/elementor/thumbs/memphis_4-q0y27ati7gl1mwhhf0aax6f7o56bqwlape81kws3cw.png"
                alt="Rotating Image"
                className="w-30 h-auto transition-normal duration-300"
                style={{
                  transform: `rotate(${scrollY * 0.2}deg)`,
                }}
              />
            </div>
            <div className="mb-4 absolute top-20 left-15 ">
              <img
                src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/elementor/thumbs/memphis_1-q0y277zzmyhgwd9q1ienh91u2wsbqr9ozr0i5k5r0g.png"
                alt="Rotating Image"
                className="w-30 h-auto transition-normal duration-300"
                style={{
                  transform: `rotate(${scrollY * 0.5}deg)`,
                }}
              />
            </div>
          </div>
        </SlideInSection>
      </section>

      <div className="bg-[url('https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/bg_img.jpg')] bg-no-repeat bg-cover bg pt-20 pb-20">
        <SlideInSection direction="bottom">
          <div>
            <div className="flex justify-center ">
              <div className="text-center flex flex-col gap-4 max-w-170">
                <p className="text-blue-300 font-semibold">WHAT WE OFFER</p>
                <p className="text-white text-3xl font-semibold">
                  Where innovation goes hand in hand with creativity.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-20  gap-15 flex-wrap ">
              <div className="block max-w-[380px] text-center relative bg-[#323437] rounded-[10px] p-6 pb-10 ">
                <div className="flex justify-center p-10 ">
                  <img
                    src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/elementor/thumbs/SHAPE-TOOL-q0yowynbb7wm7m4dfgr61mcom3mxdrnaftf2wd21a8.png"
                    alt=""
                    className="absolute -top-15 transition-transform duration-300 ease-in-out hover:rotate-30"
                  />
                </div>
                <p className="font-semibold text-2xl text-white mb-5">
                  3D Modeling
                </p>
                <p className="text-white m-auto pb-10 text-[16px]">
                  Magna molestie quam sed leo diam convallis potenti si aptent
                  pulvinar inceptos.
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
                  LEARN MORE
                </Button>
              </div>

              <div className="block max-w-[380px] text-center relative bg-[#323437] rounded-2xl p-6 ">
                <div className="flex justify-center p-10 ">
                  <img
                    src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/elementor/thumbs/VIDEO-PLAYER-q0yowzl5i1xwj8309z5sm4457hialgr0ry2kdn0n40.png"
                    alt=""
                    className="absolute -top-15 transition-transform duration-300 ease-in-out hover:rotate-30"
                  />
                </div>
                <p className="font-semibold text-2xl text-white mb-5">
                  3D Animation
                </p>
                <p className="text-white m-auto pb-10 text-[16px]">
                  Magna molestie quam sed leo diam convallis potenti si aptent
                  pulvinar inceptos.
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
                  LEARN MORE
                </Button>
              </div>

              <div className="block max-w-[380px] text-center relative bg-[#323437] rounded-2xl p-6 ">
                <div className="flex justify-center p-10 ">
                  <img
                    src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/elementor/thumbs/GAMES-q0yowty4d1q6lkb76wq175jdn6a3ba4mr65nhz905c.png"
                    alt=""
                    className="absolute -top-15 transition-transform duration-300 ease-in-out hover:rotate-30"
                  />
                </div>
                <p className="font-semibold text-2xl text-white mb-5">
                  3D Rigging
                </p>
                <p className="text-white m-auto pb-10 text-[16px]">
                  Magna molestie quam sed leo diam convallis potenti si aptent
                  pulvinar inceptos.
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
                  LEARN MORE
                </Button>
              </div>

              <div className="block max-w-[380px] text-center relative bg-[#323437] rounded-2xl p-6 pb-10">
                <div className="flex justify-center p-10 ">
                  <img
                    src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/elementor/thumbs/PAINT-BUCKET-q0yowvtsqpsr8s8gvxjac52aty0tqoc3ffgmgj67sw.png"
                    alt=""
                    className="absolute -top-10 transition-transform duration-300 ease-in-out hover:rotate-30"
                  />
                </div>
                <p className="font-semibold text-2xl text-white mb-5">
                  NFT Art
                </p>
                <p className="text-white m-auto pb-10 text-[16px]">
                  Magna molestie quam sed leo diam convallis potenti si aptent
                  pulvinar inceptos.
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
                  LEARN MORE
                </Button>
              </div>

              <div className="block max-w-[380px] text-center relative bg-[#323437] rounded-2xl p-6 ">
                <div className="flex justify-center p-10 ">
                  <img
                    src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/elementor/thumbs/COLOR-SLIDER-q0yowt0a67ow9yckcebemnrx1seq3l0wf1i60paebk.png"
                    alt=""
                    className="absolute -top-13 transition-transform duration-300 ease-in-out hover:rotate-30"
                  />
                </div>
                <p className="font-semibold text-2xl text-white mb-5">
                  AR/VR Modeling
                </p>
                <p className="text-white m-auto pb-10 text-[16px]">
                  Magna molestie quam sed leo diam convallis potenti si aptent
                  pulvinar inceptos.
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
                  LEARN MORE
                </Button>
              </div>

              <div className="block max-w-[380px] text-center relative bg-[#323437] rounded-2xl p-6 ">
                <div className="flex justify-center p-10 ">
                  <img
                    src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/elementor/thumbs/COLOR-PALLETES-q0yows2fzdnlycdxhvws260ggejcvvx62wuojfbshs.png"
                    alt=""
                    className="absolute -top-15 transition-transform duration-300 ease-in-out hover:rotate-30"
                  />
                </div>
                <p className="font-semibold text-2xl text-white mb-5">
                  Product Mockup
                </p>
                <p className="text-white m-auto pb-10 text-[16px]">
                  Magna molestie quam sed leo diam convallis potenti si aptent
                  pulvinar inceptos.
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
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </SlideInSection>
      </div>
    </>
  );
}
