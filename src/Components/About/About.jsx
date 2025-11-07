import React from "react";
import { useState, useEffect } from "react"
import { Button } from "@mui/material"
import SlideInSection from "../../Slide"

export default function About() {
  const [scrollY, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    };

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);
  return (
    <>
      <div className="relative h-90 bg-[url('https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/3d-black-icosahedron-and-asymmetric-hexagonal-bipyramid-patterned-background.jpg')] bg-no-repeat bg-cover bg-right">
        <div className="absolute inset-0 bg-[#242426]/85"></div>

        <div className="  text-4xl text-white font-bold left-25 bottom-30 absolute">
          <p>ABOUT US</p>
          <p className="text-[20px] font-light mt-4">
            We Don't Make Animation. We Make Animation Better.
          </p>
        </div>

        <div className="absolute right-10 -bottom-25 z-1">
          <img
            src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/9_.png"
            alt=""
            className="w-60 h-auto"
          />
        </div>
      </div>

 
      <section className="bg-[#111111] text-white py-30  px-20 flex flex-row items-center  relative ">
        
        <SlideInSection direction="bottom">
        <div className="flex gap-20">
        <div className="w-2/3 flex justify-center z-1">
          <img
            src="https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/3d-artist-using-blueprint-with-graphics-tablet-and-computers-while-working-on-project-of-3d-design-1024x684.jpg"
            alt="Designer working at computer"
            className="rounded-lg shadow-lg w-full "
          />
        </div>

        <div className="w-1/2 space-y-6 flex flex-col justify-center z-2">
          <h3 className="text-blue-400 uppercase tracking-wide text-sm font-semibold">
            Who We Are
          </h3>
          <h2 className="text-3xl md:text-3xl font-medium leading-snug">
            We are making the world a better place, one design at a time.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Cras dapibus sapien molestie at non fusce facilisi. Iaculis habitant
            elit scelerisque interdum tortor suscipit. Sollicitudin eu sapien
            magna est vestibulum eros nisi.
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
              width:"35%",
              fontFamily: "Inter, sans-serif",
            }}
          >
            LEARN MORE
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
    </>
  );
}
