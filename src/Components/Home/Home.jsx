import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SlideInSection from "../../Slide";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-[url('https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/bg_img.jpg')] bg-center h-auto bg-cover bg-no-repeat
        relative"
      >
        <SlideInSection direction="bottom">
          <div className="flex flex-col justify-center  align-middle text-white items-center h-100">
            <div className="text-[49px] mb-5  w-200 flex justify-center text-center font-bold mt-120  leading-tight">
              Engaging you with Creative Design
            </div>
            <div className="text-[20px] w-170 flex justify-center text-center mb-8 font-light leading-[26px] ">
              Massa tellus suspendisse montes enim magnis nascetur dui in
              volutpat adipiscing urna
            </div>

            <Button
              variant="contained"
              onClick={() => navigate("/about")}
              sx={{
                backgroundColor: "#205cd4",
                color: "white",
                fontSize: "12px",
                lineHeight: "12px",
                fontWeight: "500",
                padding: "20px 40px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              DISCOVER MORE
            </Button>
          </div>
        </SlideInSection>

        <div className="flex flex-wrap flex-row justify-center gap-5 mt-80 pb-20">
          <SlideInSection direction="left">
            <div className="max-w-sm px-6 py-8 bg-[#323437]  rounded-lg shadow-sm flex flex-col justify-center items-center text-center text-white   ">
              <div className="text-[20px] bg-white text-[#5b8ee2] py-3.5 px-5 rounded-[5px] mt-7 mb-3">
                <i className="fa-solid fa-cube"></i>
              </div>

              <Link to="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
                  3D Modeling
                </h5>
              </Link>
              <div>
                <p className="inline-block">
                  In felis mauris penatibus ullamcorper
                </p>
                <br />
                <p className="inline-block">
                  senectus ad nibh sed habitant suspendisse
                </p>
              </div>
            </div>
          </SlideInSection>
          <SlideInSection direction="bottom">
            <div
              className="max-w-sm px-6 py-8 bg-[url('https://web.moxcreative.com/3dstudioz/wp-content/uploads/sites/4/2023/01/Pattern_img.png')] bg-center bg-cover bg-no-repeat bg-[#205cd4]
            border  rounded-lg shadow-sm   flex flex-col justify-center items-center text-center "
            >
              <div className="text-[20px] bg-white text-[#5b8ee2] py-3.5 px-5 rounded-[5px] mt-7 mb-3">
                <i className="fa-solid fa-cube"></i>
              </div>

              <Link to="/">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white ">
                  3D Animation
                </h5>
              </Link>
              <div>
                <p className="inline-block  text-white">
                  In felis mauris penatibus ullamcorper
                </p>
                <br />
                <p className="inline-block  text-white">
                  senectus ad nibh sed habitant suspendisse
                </p>
              </div>
            </div>
          </SlideInSection>
          <SlideInSection direction="right">
            <div className="max-w-sm px-6 py-8 bg-[#323437]  rounded-lg shadow-sm flex flex-col justify-center items-center text-center text-white   ">
              <div className="text-[20px] bg-white text-[#5b8ee2] py-3.5 px-5 rounded-[5px] mt-7 mb-3">
                <i className="fa-solid fa-cube"></i>
              </div>

              <Link to="/">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  3D NFT
                </h5>
              </Link>
              <div>
                <p className="inline-block ">
                  In felis mauris penatibus ullamcorper
                </p>
                <br />
                <p>senectus ad nibh sed habitant suspendisse</p>
              </div>
            </div>
          </SlideInSection>
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
                Cras dapibus sapien molestie at non fusce facilisi. Iaculis
                habitant elit scelerisque interdum tortor suscipit. Sollicitudin
                eu sapien magna est vestibulum eros nisi.
              </p>
              <Button
                variant="contained"
                onClick={() => navigate("/about")}
                sx={{
                  backgroundColor: "#205cd4",
                  color: "white",
                  fontSize: "12px",
                  lineHeight: "12px",
                  fontWeight: "500",
                  padding: "15px 25px",
                  width: "30%",
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

      <div className="flex justify-center gap-6 flex-row flex-wrap pt-20 pb-20 bg-[#1c1c1c]">
        <div className="flex justify-center ml-22 mr-18 mb-10   ">
          <div className="text-white text-3xl flex-1 font-bold">
            Our latest portfolio
            <div className="w-20 mt-10 h-0 border-2 border-blue-500"></div>
          </div>

          <div className="text-gray-400 flex-1">
            Ex sollicitudin montes aenean cubilia velit vehicula habitasse lacus
            lacinia morbi. Lacus pede aliquam sagittis tellus posuere nisl
            placerat. Volutpat mus odio placerat id mauris porta.
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
};

export default Home;
